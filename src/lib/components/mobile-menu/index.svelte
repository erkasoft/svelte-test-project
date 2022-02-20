<script>
	import { fade } from 'svelte/transition'
	import MobileItem from './mobile-item.svelte';
	import Backdrop from '$lib/components/backdrop.svelte';
	import Close from './svg/close.svelte';

	export let mobileMenuActive = false;
	let mobile = false;

	$: mobileMenuActive = mobile;

	export let items = [];

	function clickHandler() {
		console.log('clicked mobile', mobileMenuActive);
		mobile = !mobile;
	}
</script>

<Backdrop mobile={mobileMenuActive} />
<div
	class="transition duration-300 ease-in-out fixed top-0 left-0 z-50 flex w-10/12 xl:hidden h-screen py-10 pl-3 shadow-2xl mobilemenu"
	class:hidden={!mobileMenuActive}
	class:block={mobileMenuActive}
transition:fade
>
	<span
		on:click={() => (mobileMenuActive = !mobileMenuActive)}
		class="fixed text-secondary-100 top-2 right-3 hover:cursor-pointer  p-5"
	>
		<Close />
	</span>
	<ul class="mobile-menu-item xl:hidden">
		<MobileItem {items} />
	</ul>
</div>
