<script>
	import Backdrop from '$lib/components/backdrop.svelte';
	import MegaMenuItem from '$lib/components/megamenu-item.svelte';
	import MegaMenu from '$lib/components/megamenu.svelte';
	import SectionMenu from '$lib/components/megamenu-section.svelte';
	import SectionMenuItem from '$lib/components/megamenu-section-item.svelte';

	const Logo = '/logo.svg';
	const layout = 'center';
	export let siteTitle;
	const center = true;
	const standart = false;

	let menu;
	let mobileMenuActive = false;
	let mobile = false;

	siteTitle = import.meta.env.VITE_SITE_TITLE;

	function clickHandler() {
		console.log('clicked');
		mobile = !mobile;

		/*if (menu.current.classList.contains('hidden')) {*/
		/*menu.current.classList.remove('hidden');*/
		/*} else {*/
		/*menu.current.classList.add('hidden');*/
		/*}*/
	}

	$: mobileMenuActive = mobile;

</script>

<header class="w-full">
	<section
		class="flex flex-wrap w-full items-center"
		class:flex-col={center == true}
		class:items-center={center == true}
	>
		<div class="flex items-center justify-center w-full py-5 xl:w-1/3 xl:justify-start xl:pl-2 ">
			<div class="px-4 text-gray-600 cursor-pointer xl:hidden" id="burger" on:click={clickHandler}>
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
			<MegaMenu>
				<MegaMenuItem text="Giriş" url="/" />
				<MegaMenuItem text="Kategoriler" hoverable>
					<SectionMenu>
						<a href="/kategoriler" class="hover:cursor-pointer"> resim </a>

						<SectionMenuItem text="Product Category" url="/product-category" />
					</SectionMenu>
				</MegaMenuItem>
				<MegaMenuItem text="Hakkımızda" url="/hakkimizda" />
				<MegaMenuItem text="İletişim" url="/iletisim" />
			</MegaMenu>
		</div>
		<!-- <div class={`backdrop xl:hidden`} class:hidden={!mobile} /> -->
		<Backdrop mobile={mobileMenuActive} class="xl:hidden" />
		<div
			class="fixed top-0 left-0 z-50 flex w-10/12 xl:hidden h-screen py-10 pl-3 shadow-2xl mobilemenu"
			class:hidden={!mobile}
			class:block={mobile}
		>
			<span on:click={clickHandler} class="fixed text-secondary-100 top-2 right-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<ul class="mobile-menu-item xl:hidden">mobile menü</ul>
		</div>
	</section>
</header>
