import { LayoutsEnum } from '@/layouts/types';

export const auth = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/auth/Login.vue'),
		meta: {
			layout: LayoutsEnum.login,
		},
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/views/auth/Register.vue'),
		meta: {
			layout: LayoutsEnum.login,
		},
	},
	{
		path: '/reset',
		name: 'reset',
		component: () => import('@/views/auth/Reset.vue'),
		meta: {
			layout: LayoutsEnum.login,
		},
	},
];
