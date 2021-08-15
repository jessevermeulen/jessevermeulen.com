import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import netlify from '@sveltejs/adapter-netlify';
import imagePreprocessor from 'svimg';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		imagePreprocessor({
			inputDir: 'static',
			outputDir: 'static'
		}),
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
