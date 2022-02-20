<script>
	import Backdrop from '$lib/components/backdrop.svelte';
	import MegaMenuItem from '$lib/components/mega-menu/item.svelte';
	import MegaMenu from '$lib/components/mega-menu/index.svelte';
	import SectionMenu from '$lib/components/mega-menu/section.svelte';
	import SectionMenuItem from '$lib/components/mega-menu/section-item.svelte';
	import MobileMenu from '$lib/components/mobile-menu/index.svelte';

	import { MENU_ITEMS } from '$lib/constants';

	const Logo = '/logo.svg';
	const layout = 'center';
	export let siteTitle;
	const center = true;
	const standart = false;
	let mobile = false;
	let mobileMenuActive = false;

	$: mobileMenuActive = mobile;

	let menu;

	function clickHandler() {
		console.log('clicked header mobile, mobileMenuActive', mobile, mobileMenuActive);
		mobile = !mobile;
	}

	siteTitle = import.meta.env.VITE_SITE_TITLE;

	let mobileMenuItems = [
		{ title: 'Ana Sayfa', href: '/' },
		{ title: 'Ürünler', href: '#urunler' },
		{ title: 'Hakkımızda', href: '#hakkimizda' },
		{ title: 'İletişim', href: '#iletisim' }
	];
</script>

<header class="w-full">
	<section
		class="flex flex-wrap w-full items-center"
		class:flex-col={center == true}
		class:items-center={center == true}
	>
		<div class="flex items-center justify-center w-full py-5 xl:w-1/3 xl:justify-start xl:pl-2 ">
			<div
				class="px-4 text-gray-600 cursor-pointer xl:hidden"
				id="burger"
				on:click={() => (mobileMenuActive = !mobileMenuActive)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
			<span class:mx-auto={center == true}>
				<a href="/">
					<img src={Logo} alt={siteTitle} width={100} />
				</a>
			</span>
		</div>

		<div
			bind:this={menu}
			class="flex-wrap items-center hidden w-full h-auto text-sm xl:w-full  xl:flex megamenu"
			class:justify-center={center}
		>
			<MegaMenu items={MENU_ITEMS}>
			</MegaMenu>
		</div>
		<MobileMenu items={MENU_ITEMS} bind:mobileMenuActive />
	</section>
</header>
