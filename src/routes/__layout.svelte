<script>
	import '../styles/index.css';
	import Header from '$lib/components/atoms/Header.svelte';
	import * as animateScroll from 'svelte-scrollto';

	animateScroll.setGlobalOptions({
		duration: 200
	});
</script>

<Header />
<main>
	<slot />
</main>
<!-- Footer -->
