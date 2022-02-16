<script>
	import MenuItem from './item.svelte';
	import SectionMenu from './section.svelte';
	import SectionMenuItem from './section-item.svelte';

	export let className = '';
	export let items = [];
</script>

<div class="{className} ">
	<ul class="hidden  z-50 xl:flex xl:visible">
		<slot />
		{#each items as item, i}
			{#if item.subItems}

			<MenuItem text={item.title} url={item.href} hoverable >
<SectionMenu>


</SectionMenu>

</MenuItem>
			{:else}
			<MenuItem text={item.title} url={item.href} />
			{/if}
		{/each}
	</ul>
</div>
