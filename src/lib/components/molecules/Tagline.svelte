<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<h1 class="grid text-center">
	<div class="font-clash">
		Reaching people<span class="inline-block ml-[1%] font-sentient text-left"
			>by <br /> building</span
		>
	</div>

	<span class="block font-basteleur">impactful experiences</span>

	<div class="inline-block font-clash">
		<span class="inline-block mr-[1%] font-sentient text-right">for <br /> the</span>modern www
		<span class="inline-block w-[7%] m-[-2%] align-middle">
			<Icon custom icon="globe-simple" />
			<!-- <Icon icon="globe-simple" /> -->
		</span>
		rld
	</div>
</h1>

<style>
	h1 {
		font-size: 7vw;
		line-height: 100%;

		@media (min-aspect-ratio: 17/9) {
			/* font-size: 6vw; */
		}

		.font-sentient {
			line-height: 98%;
			font-size: 20%;
		}
	}
</style>
