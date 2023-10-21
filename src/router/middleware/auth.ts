import type { NavigationGuardNext } from 'vue-router';

export default function auth({ next }: { next: NavigationGuardNext }) {
	// let isLoggedIn =true;
	// let isLoggedIn = store.getters['sessionData/isLoggedIn']
	// if(!isLoggedIn){
	//     return next({
	//         name:'login'
	//     })
	// }

	return next();
}
