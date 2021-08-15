<script>
	import { onMount } from 'svelte';
	import lozad from 'lozad';

	import Stypt from '$lib/content/stypt.svelte.md';
	import SeparatedUnited from '$lib/content/separated-united.svelte.md';
	import Oscillate from '$lib/content/oscillate.svelte.md';
	import SadIndie from '$lib/content/sad-indie.svelte.md';

	onMount(() => {
		const observer = lozad();
		observer.observe();
	});

	const components = [Stypt, SeparatedUnited, Oscillate, SadIndie];
</script>

<section id="cases" class="pt-24 pb-8">
	<div class="container mx-auto">
		<h2>Selected Work</h2>
	</div>

	{#each components as component}
		<svelte:component this={component} />
	{/each}
</section>
