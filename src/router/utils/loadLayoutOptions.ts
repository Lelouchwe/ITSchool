import { RouteOptions } from '@/router/types';
import type { LayoutOptions } from '@/layouts/types';
import type { AuthState } from '@/types/common';
export function loadLayoutOptions(state: AuthState, option?: RouteOptions): LayoutOptions {
	switch (option) {
		case RouteOptions.base: {
			if (state.user) return { sidebar: true, focused: false };
			if (state.loggedIn) return { sidebar: false, focused: true };
			return { sidebar: false };
		}
		case RouteOptions.focused:
			return { focused: true };
		default:
			return {};
	}
}

// 1) Домашняя страница - сайдбар есть/сайдбар раскрыт/цвет белый = base
// 2) Домашняя страница - сайдбара нет/цвет белый = loggedOut
// 3) Домашняя страница - сайдбара нет/цвет серый = loggedIn
// 4) Любая страница - сайдбар есть/сайдбар скрыт/цвет серый = focused
// 5) Любая страница - сайдбар есть/сайдбар скрыт/цвет белый = default
