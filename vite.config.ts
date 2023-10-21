import { fileURLToPath, URL } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
export default defineConfig({
	plugins: [
		vue({
			script: {
				defineModel: true,
			},
		}),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
			symbolId: 'icon-[dir]-[name]',
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/scss/global.scss";`,
			},
		},
		postcss: {
			plugins: [autoprefixer],
		},
	},
	server: {
		host: true,
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
