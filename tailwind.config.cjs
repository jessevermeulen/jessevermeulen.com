module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			body: ['var(--font-stack-base)'],
			clash: ['var(--font-stack-clash)'],
			basteleur: ['var(--font-stack-basteleur)'],
			sentient: ['var(--font-stack-sentient)']
		}
	},
	plugins: []
};
