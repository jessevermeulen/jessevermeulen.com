/*
	Author: Cassidy Bandy
	https://cass.moe/blog/svelte-kit-mdsvex
*/

import pMap from 'p-map';
import { basename } from 'path';

export async function get() {
	// Import all .svelte.md files in the directory
	const modules = import.meta.glob('../lib/content/*.svelte.md');

	// Run a map over each module

	// Check out the docs for p-map if this looks confusing, it's  basically
	// Array.map(...) but for promises

	const cases = await pMap(Object.entries(modules), async function ([filename, module]) {
		// Import the component. The metadata here is added by MDSveX and mirrors
		// the front matter.

		const { metadata } = await module();

		return {
			title: metadata.title,
			date: metadata.date,
			description: metadata.description,
			slug: basename(filename, '.svelte.md') // Generate a slug we can link to
		};
	});

	// Sort cases by descending date
	// cases.sort((a, b) => (a.date > b.date ? -1 : 1));

	return {
		body: { cases }
	};
}
