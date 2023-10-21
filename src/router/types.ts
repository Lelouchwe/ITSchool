import type { VueElement } from 'vue';
import type { LayoutsEnum, LayoutOptions } from '@/layouts/types';

declare module 'vue-router' {
	interface RouteMeta {
		middleware?: Function[];
		layout?: LayoutsEnum;
		layoutComponent?: VueElement | any;
		layoutPropsType?: RouteOptions;
		layoutProps?: LayoutOptions;
	}
}

export enum RouteNames {
	home = 'home',
	assignments = 'assignments',
}

export enum RouteOptions {
	base = 'base',
	loggedOut = 'loggedOut',
	loggedIn = 'loggedIn',
	focused = 'focused',
}
