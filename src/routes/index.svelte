<script>
	import PageHead from '$lib/components/page-head.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Container from '$lib/components/container.svelte';
	import PhotoGallery from '$lib/components/photo-gallery/main.svelte';
	import { productImage1, productImage2, productImage3, productImage4 } from '$lib/constants';

	let productImages = [productImage1, productImage2, productImage3, productImage4];
	const meta = {
		image: '/logo.svg'
	};
</script>

<PageHead title="Ana Sayfa" customMeta={meta} />

<Hero title="Aktekin Ofset" />
<div class="w-full bg-gray-50 py-10">
	<Container className="text-center">
		<h2  id="urunler" class="text-4xl font-bold text-gray-600">Ürünler</h2>
		<PhotoGallery photos={productImages} />
	</Container>
</div>
<div class="w-full bg-gray-100 py-10">
	<Container className="text-center">
		<h2 id="hakkimizda" class="text-4xl font-bold text-gray-600">Hakkımızda</h2>
		<div class="w-full my-5">
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet.
		</div>
	</Container>
</div>

<div class="w-full bg-gray-50 py-10">
	<Container className="text-center">
		<h2 id="iletisim" class="text-2xl">İletişim</h2>
	</Container>
</div>
