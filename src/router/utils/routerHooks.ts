import { loadLayoutMiddleware } from '@/router/utils/autoloadLayouts';
import middlewarePipeline from '@/router/utils/middlewarePipline';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { loadLayoutOptions } from '@/router/utils/loadLayoutOptions';
import { useAuthStore } from '@/stores/auth';
export const routerHooks = async (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext,
) => {
	const { state } = useAuthStore();
	await loadLayoutMiddleware(to);
	to.meta.layoutProps = await loadLayoutOptions(state, to.meta.layoutPropsType);

	if (!to.meta.middleware) {
		return next();
	}

	const middleware = to.meta.middleware;
	const context = {
		to,
		from,
		next,
		state,
	};

	return middleware[0]({
		...context,
		next: middlewarePipeline(context, middleware, 1),
	});
};
