<script>
	export let title;
	export let description;
	export let date;
	export let slug;
</script>

<article id={slug}>
	<div class="container mx-auto grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-4 pb-8">
		<h1
			class="grid lg:col-start-5 col-span-full w-max pt-24 pb-20 md:pt-32 md:pb-28 text-4xl sm:text-6xl"
		>
			{title}
		</h1>
		<p class="grid col-span-4 self-start">{@html date}</p>
		<p class="grid col-span-7">{description}</p>
	</div>

	<div class="px-2 grid gap-2">
		<slot />
	</div>
</article>
