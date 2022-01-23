<script>
	import Container from '$lib/components/container.svelte';
	export let layout = 'standart';

	export let title;
	export let description = '';

	let containerClass = '';
	let h1Class = '';

	if (layout == 'standart') {
		containerClass = 'standart-container py-8 mb-3 md:py-20 ';
		h1Class = 'mb-3 text-3xl md:text-4xl lg:text-5xl ';
	}

	if (layout == 'center') {
		containerClass = 'center-container text-center py-8 mb-3 md:py-20 md:mb-5';
	}

	if (layout == 'minimal') {
		containerClass = 'minimal-container text-center py-3 md:py-14 ';
	}
</script>

<div class="w-full page-header">
	<Container className={containerClass}>
		<h1 class="font-formal text-gray-700 {h1Class}">
			{title}
		</h1>

		{#if layout !== 'minimal' && description}
			<p class="text-lg text-gray-500">{description}</p>
		{/if}
	</Container>
</div>
