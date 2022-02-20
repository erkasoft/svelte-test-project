<script>
	import PageHead from '$lib/components/page-head.svelte';
	import Container from '$lib/components/container.svelte';
	import PhotoGallery from '$lib/components/photo-gallery/main.svelte';
	import { productGalleryImages, slide1, slide2, slide3 } from '$lib/constants';
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	/*import '@splidejs/splide/dist/css/splide.min.css';*/
	import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
	const meta = {
		image: '/logo.svg'
	};
</script>

<PageHead title="Ana Sayfa" customMeta={meta} />
<div>
	<Splide options={ {
    rewind: true,
	type: 'loop',
	speed: 800,
	height: 500,
	autoWidth: true,
    gap   : '1rem',
  } }>
  <SplideSlide>
    <img src={slide1} alt="Image 1" />
  </SplideSlide>
  <SplideSlide>
    <img src={slide2} alt="Image 2" />
  </SplideSlide>
<SplideSlide>
<img src={slide3} alt="kutular"  />
</SplideSlide>
</Splide>
</div>	
<div class="w-full bg-white py-20">
	<Container className="text-center">
		<h2  id="urunler" class="text-4xl font-semibold my-20 text-gray-600">Ürünler</h2>
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
