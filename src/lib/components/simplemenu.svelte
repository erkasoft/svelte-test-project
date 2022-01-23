<script>
	export let menuItems;
</script>

<div class="simplemenu">
	{#each menuItems as item}
		<a href={item.href} class="px-3 py-2 text-gray-600 text-md hover:text-gray-800">
			{item.label}
		</a>
	{/each}
</div>
