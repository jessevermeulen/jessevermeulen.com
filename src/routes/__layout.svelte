<script>
	import '$lib/styles/index.css';

	import Meta from '$lib/components/atoms/Meta.svelte';
	import Header from '$lib/components/atoms/Header.svelte';
	import Footer from '$lib/components/atoms/Footer.svelte';
</script>

<Meta />
<Header />
<main>
	<slot />
</main>
<!-- <Footer /> -->
