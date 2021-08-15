module.exports = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	layout: {
		case: './src/lib/content/layout.svelte'
	},
	remarkPlugins: [
		[
			require('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/jessevermeulen/jessevermeulen.com'
			}
		],
		require('remark-abbr')
	],
	rehypePlugins: [
		require('rehype-slug'),
		[
			require('rehype-autolink-headings'),
			{
				behavior: 'wrap'
			}
		]
	]
};
