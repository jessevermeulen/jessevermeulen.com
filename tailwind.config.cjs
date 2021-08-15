module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,svelte.md,ts}'],
	theme: {
		fontFamily: {
			body: ['var(--font-stack-base)'],
			clash: ['var(--font-stack-clash)'],
			basteleur: ['var(--font-stack-basteleur)'],
			sentient: ['var(--font-stack-sentient)']
		},
		extend: {
			screens: {
				portrait: { raw: '(orientation: portrait)' }
			},
			keyframes: {
				bounceSimple: {
					'0%, 100%': {
						transform: 'translate3d(0, 25%, 0)'
					},
					'50%': {
						transform: 'translate3d(0, 0, 0)'
					}
				}
			},
			animation: {
				'bounce-simple': 'bounceSimple 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite'
			}
		}
	},
	corePlugins: {
		container: false
	},
	plugins: []
};
