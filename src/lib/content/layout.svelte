<script>
	export let title;
	export let description;
	export let date;
	export let slug;
</script>

<article id={slug}>
	<div class="container mx-auto grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-4 pb-8">
		<h1 class="grid col-start-5 col-span-full w-max pt-48 pb-40 text-2xl sm:text-4xl xl:text-6xl">
			{title}
		</h1>
		<p class="date grid col-span-4">{@html date}</p>
		<p class="grid col-span-7">{description}</p>
	</div>

	<div class="px-2 grid sm:grid-cols-2 gap-2">
		<slot />
	</div>
</article>
