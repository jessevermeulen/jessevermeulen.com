import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import netlify from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true
		})
	],
	kit: {
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#jessevermeulen'
	}
};

export default config;
