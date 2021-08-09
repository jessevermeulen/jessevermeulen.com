<script>
	import { onMount } from 'svelte';
	import * as animateScroll from 'svelte-scrollto';

	let headerHeight;
	let clientHeight;
	let offset;
	let scrollPosition;
	let isSticky = false;

	onMount(() => {
		clientHeight = document.documentElement.clientHeight;
		offset = clientHeight - headerHeight;
	});

	function resize() {
		offset = clientHeight - headerHeight;
	}

	function sticky() {
		if (offset <= scrollPosition) {
			isSticky = true;
		} else {
			isSticky = false;
		}
	}
</script>

<svelte:window bind:scrollY={scrollPosition} on:scroll={sticky} on:resize={resize} />

<header
	bind:offsetHeight={headerHeight}
	class="container grid grid-flow-col justify-between items-center w-full h-16 text-xl transition duration-[0.2s] border-b {!isSticky
		? 'absolute bottom-0 transform -translate-y-4 border-transparent bg-transparent'
		: 'fixed border-gray-300 bg-white bg-opacity-90 backdrop-blur'}"
	style={!isSticky ? `top: ${offset}px` : ''}
>
	<div class="grid grid-flow-col gap-6">
		<button on:click={() => animateScroll.scrollToTop()}>
			<span class="sr-only sm:not-sr-only">Jesse Vermeulen</span>
			<span class="sm:hidden">JV</span></button
		>
	</div>
	<nav>
		<ul class="grid grid-flow-col gap-6">
			<!-- <li>
				<button type="button" on:click={() => animateScroll.scrollTo({ element: '#work' })}
					>Work</button
				>
			</li>
			<li>
				<button type="button" on:click={() => animateScroll.scrollTo({ element: '#about' })}
					>About</button
				>
			</li>
			<li><button type="button">Contact</button></li> -->
			<li>
				<a href="mailto:hello@jessevermeulen.com" class="hover:text-gray-300 transition">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* li {
		&:hover {
			@apply underline;
		}
	} */
</style>
