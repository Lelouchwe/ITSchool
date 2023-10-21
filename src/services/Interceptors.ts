import axiosInstance from './api.js';
import tokenService from './modules/token.service.js';
import { useAuthStore } from '@/stores/auth';

const setup = () => {
	const { logout, refreshTokens } = useAuthStore();

	axiosInstance.interceptors.request.use(
		config => {
			const token = tokenService.getLocalAccessToken();
			if (token) {
				config.headers['Authorization'] = 'Bearer ' + token;
			}
			return config;
		},
		error => {
			return Promise.reject(error);
		},
	);

	axiosInstance.interceptors.response.use(
		res => {
			return res;
		},
		async err => {
			const originalConfig = err.config;
			const URL = originalConfig.url;
			if ((URL !== 'login/' || URL !== 'logout/') && err.response) {
				if (originalConfig.url === 'login/refresh/' && err.response.status === 401) {
					logout();
					return Promise.reject(err);
				}
				if (err.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true;

					try {
						const rs = await axiosInstance.post('login/refresh/', {
							refresh: tokenService.getLocalRefreshToken(),
						});
						const { access, refresh } = rs.data;

						refreshTokens({
							access,
							refresh,
						});
						tokenService.updateLocalAccessToken({
							access,
							refresh,
						});

						return axiosInstance(originalConfig);
					} catch (_error) {
						return Promise.reject(_error);
					}
				}
			}

			return Promise.reject(err);
		},
	);
};

export default setup;
