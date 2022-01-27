<script>
	import MobileItem from './mobile-item.svelte';
	import Backdrop from '$lib/components/backdrop.svelte';
	/*import Close from './svg/close.svelte'*/

	export let mobileMenuActive = false;
	let mobile = false;

	$: mobileMenuActive = mobile;

	export let items = [];

	function clickHandler() {
		console.log('clicked mobile', mobileMenuActive);
		mobile = !mobile;

	}

</script>

<Backdrop mobile={mobileMenuActive} class="xl:hidden" />
<div
	class="fixed top-0 left-0 z-50 flex w-10/12 xl:hidden h-screen py-10 pl-3 shadow-2xl mobilemenu"
	class:hidden={!mobileMenuActive}
	class:block={mobileMenuActive}
>
<span on:click={() => mobileMenuActive = !mobileMenuActive } class="fixed text-secondary-100 top-2 right-3 hover:cursor-pointer  p-5">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	</span>
	<ul class="mobile-menu-item xl:hidden">
		<MobileItem {items} />
	</ul>
</div>
