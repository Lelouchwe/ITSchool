import '@/assets/main.css';
import { createApp } from 'vue';
import store from '@/stores';
import { useAuthStore } from '@/stores/auth';
import setupInterceptors from '@/services/Interceptors';
import 'virtual:svg-icons-register';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(store).use(router);
setupInterceptors();

useAuthStore()
	.init()
	.finally(() => app.mount('#app'));
