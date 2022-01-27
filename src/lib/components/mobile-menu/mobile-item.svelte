<script>
	import DownArrow from '$lib/components/mobile-menu/svg/down-arrow.svelte';

	export let items = [];
	export let collapsed = false;
	let menuList = [];

	function clickHandler(index) {
		menuList[index].classList.toggle('hidden');
	}
</script>

{#each items as item, i}
	<li on:click={() => clickHandler(i)}>
		{#if item.subItems}
			<span class="text-lg flex items-center mobileListItem mobileSubMenu ">
				{item.title}
				<span class="down-arrow">
					<DownArrow />
				</span>
			</span>
			<ul class="{collapsed ? 'hidden' : ''} mobileSubMenuList " bind:this={menuList[i]}>
				{#each item.subItems as subMenuItem}
					<li><a href={subMenuItem.href}>{subMenuItem.title}</a></li>
				{/each}
			</ul>
		{:else}
			<a href={item.href}>{item.title}</a>
		{/if}
	</li>
{/each}

<style>
</style>
