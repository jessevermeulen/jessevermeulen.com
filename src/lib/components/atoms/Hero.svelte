<script>
	import { onMount } from 'svelte';
	import * as animateScroll from 'svelte-scrollto';

	let innerHeight;
	let height;

	onMount(() => {
		height = innerHeight;
	});
</script>

<svelte:window bind:innerHeight />

<section class="container h-screen" style="max-height: {height}px;">
	<div class="grid gap-8 pt-16">
		<h1>
			<span class="after:block">Digital Product Designer</span>Amsterdam — NL
		</h1>
		<button
			type="button"
			on:click={() => animateScroll.scrollTo({ element: '#about' })}
			class="text-2xl animate-bounce-simple w-[fit-content]">↓</button
		>
	</div>
</section>
