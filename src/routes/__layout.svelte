<script>
	import * as animateScroll from 'svelte-scrollto';

	import '$lib/styles/index.css';
	import Header from '$lib/components/atoms/Header.svelte';
	import Footer from '$lib/components/atoms/Footer.svelte';
	import Meta from '$lib/components/atoms/Meta.svelte';

	animateScroll.setGlobalOptions({
		duration: 200
	});
</script>

<Meta />
<Header />
<main>
	<slot />
</main>
<!-- <Footer /> -->
