import { createRouter, createWebHistory } from 'vue-router';
import { routerHooks } from '@/router/utils/routerHooks';
import { auth } from '@/router/modules';
import { RouteNames, RouteOptions } from '@/router/types';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: RouteNames.home,
			component: () => import('@/views/home/Index.vue'),
			meta: {
				layoutPropsType: RouteOptions.base,
			},
		},
		{
			path: '/assignments',
			name: RouteNames.assignments,
			component: () => import('@/views/assignments/Index.vue'),
			meta: {
				layoutPropsType: RouteOptions.focused,
			},
		},
		...auth,
	],
});

router.beforeEach(routerHooks);

export default router;
