<script>
	import Icon from '$lib/components/atoms/Icon.svelte';
</script>

<h1 class="grid gap-3 text-center text-8xl">
	<div class="font-clash">
		Reaching people<span class="font-sentient text-xl text-left inline-block ml-4"
			>by <br /> building</span
		>
	</div>

	<span class="font-basteleur block">impactful experiences</span>

	<div class="font-clash inline-block">
		<span class="font-sentient text-xl text-right inline-block mr-4">for <br /> the</span>modern www
		<div class="icon inline-block align-middle -mx-5">
			<Icon gradient icon="globe-simple" />
		</div>
		rld
	</div>
</h1>

<style>
	h1 .font-sentient {
		line-height: 98%;
	}

	.icon {
		width: 5.25rem;
	}
</style>
