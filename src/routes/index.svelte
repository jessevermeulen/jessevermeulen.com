<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const res = await fetch('/index.json');

		if (res.ok) {
			return {
				props: {
					cases: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load /index.json`)
		};
	}
</script>

<script>
	import Hero from '$lib/components/atoms/Hero.svelte';
	import Intro from '$lib/components/molecules/Intro.svelte';
	import Cases from '$lib/components/organisms/Cases.svelte';

	export let cases;
</script>

<Hero />
<Intro />
<Cases {...cases} />
