import type { RouteLocationNormalized } from 'vue-router';
import { LayoutsEnum, AppLayoutToFileMap } from '@/layouts/types';

export async function loadLayoutMiddleware(route: RouteLocationNormalized): Promise<void> {
	const { layout } = route.meta;
	const normalizedLayoutName = layout || LayoutsEnum.default;
	const fileName = AppLayoutToFileMap[normalizedLayoutName];
	const component = await import(`../../layouts/${fileName}.vue`);
	route.meta.layoutComponent = component.default;
}
