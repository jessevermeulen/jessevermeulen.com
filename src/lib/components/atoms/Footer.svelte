<script>
	import Icon from './Icon.svelte';

	let date = new Date().getFullYear();
</script>

<!-- <footer
	class="container mx-auto relative h-screen grid justify-center items-center overflow-hidden bg-gray-900"
>
	<h2 class="text-white">Creating things with purpose</h2>
	<p class="absolute left-0 right-0 bottom-8 max-w-max mx-auto text-white">
		&copy; Jesse Vermeulen {date}
	</p>
	<div
		class="absolute top-2/4 left-0 right-0 w-2/4 mx-auto transform-gpu -translate-y-2/4 text-gray-700"
	>
		<Icon class="icon" custom icon="jv-logomark" />
	</div>
</footer> -->

<footer id="contact" class="container mx-auto grid gap-24 pt-24 pb-8 text-center">
	<a href="mailto:hello@jessevermeulen.com" class="text-2xl sm:text-4xl">hello@jessevermeulen.com</a
	>
	<p>&copy; Jesse Vermeulen {date}</p>
</footer>
