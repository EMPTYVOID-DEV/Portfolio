import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		env: {
			dir: './'
		},

		adapter: adapter(),
		prerender: {
			entries: [
				'/projects/1',
				'/projects/2',
				'/projects/3',
				'/projects/4',
				'/writings/1',
				'/writings/2',
				'/writings/3',
				'/writings/4'
			]
		}
	}
};

export default config;
