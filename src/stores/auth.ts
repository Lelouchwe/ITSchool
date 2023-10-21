import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import {
	sendEmailCode,
	checkEmailCode,
	createAccount,
	authorization,
	setPassword,
	getAccountDetails,
} from '@/services/modules/auth.service';
import type { AuthState } from '@/types/common';

export const useAuthStore = defineStore('auth', () => {
	const accountDetails = JSON.parse(localStorage.getItem('user') as string);
	const initialState = accountDetails ? { loggedIn: true, user: accountDetails } : { loggedIn: true, user: null };
	const initialPayload = {
		email: null,
		password: null,
		code: null,
	};
	const form: { [key: string]: string | null } = reactive({ ...initialPayload });
	const state = reactive<AuthState>(initialState);
	const loggedIn = ref(false);
	const credits = reactive({ access: null, refresh: null });
	async function init() {
		if (!state.loggedIn) return;
		try {
			await getAccountDetails();
		} catch (e) {
			console.error(e);
		}
	}
	function login({ email, password }: { email: string; password: string }) {
		return authorization({ email, password });
	}
	function sendCode({ email, password, reset }: { email: string; password?: string; reset?: boolean }) {
		setPayload({ email, password });
		// return sendEmailCode({ email, password, reset });
	}
	function checkCode({ email, code }: { email: string; code: string }) {
		setPayload({ email, code });
		return checkEmailCode({ email, code });
	}
	function register({ email, password, code }: { email: string; password: string; code: string }) {
		setPayload({ email, password, code });
		// return createAccount({ email, password, code });
	}
	function reset({ email, password, code }: { email: string; password: string; code: string }) {
		setPayload({ email, password, code });
		return setPassword({ email, password, code });
	}
	function logout() {
		console.log('logout');
	}
	function refreshTokens(payload: { access: string; refresh: string }) {
		Object.assign(credits, payload);
	}

	function setPayload(payload: { email: string | null; password?: string; code?: string }) {
		Object.assign(form, { ...initialPayload, ...payload });
	}
	function resetPayload() {
		Object.assign(form, initialPayload);
	}

	return {
		form,
		state,
		loggedIn,
		init,
		sendCode,
		checkCode,
		login,
		register,
		reset,
		resetPayload,
		logout,
		refreshTokens,
	};
});
