import $api from '@/services/api';
import tokenService from './token.service';

export async function getAccountDetails() {
	return await $api.get('users/profile/');
}
export async function sendEmailCode({ email, password, reset }: { email: string; password?: string; reset?: boolean }) {
	return await $api.post('auth/send-code/', { email, password, reset });
}
export async function checkEmailCode({ email, code }: { email: string; code: string }) {
	return await $api.post('auth/check-code/', { email, code });
}
export async function createAccount({ email, password, code }: { email: string; password: string; code: string }) {
	return await $api.post('auth/registration/', { email, password, code });
}
export async function setPassword({ email, password, code }: { email: string; password: string; code: string }) {
	return await $api.post('auth/reset-password/', { email, password, code });
}
export async function authorization({ email, password }: { email: string; password: string }) {
	const response = await $api.post('auth/login/', { email, password });
	if (response.data.access) tokenService.setUser(response.data);
	return response;
}
