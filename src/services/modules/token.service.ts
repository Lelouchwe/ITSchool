class TokenService {
	getLocalRefreshToken() {
		const user = JSON.parse(localStorage.getItem('user') as string);
		return user?.refresh;
	}

	getLocalAccessToken() {
		const user = JSON.parse(localStorage.getItem('user') as string);
		return user?.access;
	}

	updateLocalAccessToken({ access, refresh }: { access: string; refresh: string }) {
		const user = JSON.parse(localStorage.getItem('user') as string);
		user.access = access;
		user.refresh = refresh;
		localStorage.setItem('user', JSON.stringify(user));
	}
	setUser(user: any) {
		localStorage.setItem('user', JSON.stringify(user));
	}
}

export default new TokenService();
