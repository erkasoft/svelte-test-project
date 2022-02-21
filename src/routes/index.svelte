<script>
	import PageHead from '$lib/components/page-head.svelte';
	import Container from '$lib/components/container.svelte';
	import PhotoGallery from '$lib/components/photo-gallery/main.svelte';
	import { productGalleryImages, slide1, slide2, slide3 } from '$lib/constants';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
	/*import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';*/
	const meta = {
		image: '/logo.svg'
	};
</script>

<PageHead title="Ana Sayfa" customMeta={meta} />
	<div class="w-full bg-white">
	<Container>
<div class="flex flex-wrap">
	
<div class="w-1/2">
	<Splide
		options={{
			rewind: true,
			type: 'fade',
			speed: 1800,
			gap: '1rem',
height:'500px', autoplay: true , arrows: false, pagination: false
		}}
	>
		<SplideSlide>
			<div class="w-full h-full flex items-center justify-center">
				<img src={slide1} alt="Image 1" height="500px" width="500px" />
			</div>
		</SplideSlide>
		<SplideSlide>
			<div class="w-full h-full flex items-center justify-center">
				<img src={slide2} alt="Image 2" height="500px" width="500px" />
			</div>
		</SplideSlide>
		<SplideSlide>
			<div class="w-full h-full flex items-center justify-center">
				<img src={slide3} alt="Image 2" height="500px" width="500px"/>
			</div>
		</SplideSlide>
	</Splide>
</div>
<div class="w-1/2 flex items-center justify-center">
  <h1 class="text-4xl text-gray-600">Aktekin Ofset</h1>
</div>
</div>	
	</Container>
	</div>
<div class="w-full bg-white py-20">
	<Container className="text-center">
		<h2 id="urunler" class="text-4xl font-semibold my-20 text-gray-600">Ürünler</h2>
		<PhotoGallery photos={productGalleryImages} />
	</Container>
</div>
<div class="w-full bg-ani bg-gray-100 py-10">
	<Container className="my-40 text-center">
		<h2 id="hakkimizda" class="text-4xl my-20 font-semibold text-gray-600">Hakkımızda</h2>
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

<style type="text/css" media="screen">
	.splide__slide {
		height: 500px;
	}
</style>
