<script>
	export let whiteBg = false;
	export let textBlock = false;
	export let className = '';
	export let imageBlock = false;
</script>

<div
	class="flex flex-wrap w-full text-primary-700  md:w-1/2 {className}"
	class:bg-white={whiteBg}
	class:items-center={textBlock}
>
	{#if imageBlock}
		<div class="relative w-full h-80 md:h-full">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>
