<script>
	import Backdrop from '$lib/components/backdrop.svelte';
	import MegaMenuItem from '$lib/components/megamenu-item.svelte';
	import MegaMenu from '$lib/components/megamenu.svelte';
	import SectionMenu from '$lib/components/megamenu-section.svelte';
	import SectionMenuItem from '$lib/components/megamenu-section-item.svelte';
	import MobileMenu from '$lib/components/mobile-menu/index.svelte';

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

	let mobileMenuItems	 = [
		{ title: 'Ana Sayfa', href: '/' },
		{
			title: 'Ürünler',
			href: '#',
			subItems: [
				{ title: 'Ürün Kategori 1', href: '/product-category' },
				{ title: 'Ürün Kategori 2', href: '/product-category' }
			]
		},
		{
			title: 'Ürünler 2',
			href: '#',
			subItems: [
				{ title: 'Ürün Kategori 3', href: '/product-category' },
				{ title: 'Ürün Kategori 4', href: '/product-category' }
			]
		},
		{ title: 'Hakkımızda', href: '/hakkimizda' },
		{ title: 'İletişim', href: '/iletisim' }
	];

</script>

<header class="w-full">
	<section
		class="flex flex-wrap w-full items-center"
		class:flex-col={center == true}
		class:items-center={center == true}
	>
		<div class="flex items-center justify-center w-full py-5 xl:w-1/3 xl:justify-start xl:pl-2 ">
<div class="px-4 text-gray-600 cursor-pointer xl:hidden" id="burger" on:click={() => mobileMenuActive = !mobileMenuActive }>
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
<MobileMenu items={mobileMenuItems} bind:mobileMenuActive={mobileMenuActive} />
	</section>
</header>
