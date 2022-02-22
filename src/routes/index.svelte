<script>
	import PageHead from '$lib/components/page-head.svelte';
	import Container from '$lib/components/container.svelte';
	import PhotoGallery from '$lib/components/photo-gallery/main.svelte';
	import { productGalleryImages, slide1, slide2, slide3 } from '$lib/constants';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/splide.min.css';
	import HomeIcon from '$lib/components/home-icon.svelte';
	import PhoneIcon from '$lib/components/phone-icon.svelte';
	import MobileIcon from '$lib/components/mobile-icon.svelte';
	import MailIcon from '$lib/components/mail-icon.svelte';

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
						height: '500px',
						autoplay: true,
						arrows: false,
						pagination: false
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
							<img src={slide3} alt="Image 2" height="500px" width="500px" />
						</div>
					</SplideSlide>
				</Splide>
			</div>
			<div class="w-1/2 flex items-center justify-center">
				<h1 class="text-6xl text-primary-600">Kutu Ambalaj Bizim İşimiz</h1>
			</div>
		</div>
	</Container>
</div>
<div class="w-full bg-white py-20">
	<div class="bg-gray-100 py-10 text-center bg-ani shadow-xl my-10">
		<h2 id="urunler" class="text-5xl my-20  text-primary-600">Ürünler</h2>
	</div>
	<Container className="text-center">
		<PhotoGallery photos={productGalleryImages} />
	</Container>
</div>
<div class="w-full bg-ani bg-gray-100 py-10 shadow-xl ">
	<Container className="mb-40 text-center">
		<h2 id="hakkimizda" class="text-5xl my-10 text-primary-600">Hakkımızda</h2>
		<p class="text-lg text-primary-500 mb-10">AMBALAJ, OFSET, ETİKET</p>
		<div class="w-full my-5 text-lg leading-9">
			<p>1998 tarihinde Denizli'de Aktekin Ofset Ambalaj olarak faaliyetimize başladık.</p>
			<p>
				Kutu ambalaj üretiyoruz. Tekstil, Kablo, Mermer, Bornoz, Havlu kutuları, Gıda Kutuları,
				Karton kutular ve Mukavva kutu üretiyoruz.
			</p>
			<p>
				Aktekin Ofset olarak, kaliteden ödün vermeden, müşterilerimiz ihtiyaçlarına uygun ambalaj
				üretimine ilk günkü heyecan ve meslek aşkıyla çalışmaya devam ediyoruz.
			</p>
		</div>
	</Container>
</div>

<div class="w-full bg-gray-50 my-20">
	<Container className="text-center">
		<h2 id="iletisim" class="text-5xl my-10 text-primary-600">İletişim</h2>

		<div class="flex flex-wrap">
			<div class="w-full lg:w-2/3 baseline-9  text-primary-600 text-lg ">
				<div class="flex items-start w-full mb-2 text-2xl">
					Aktekin Ofset Ambalaj San. ve Tic. Ltd. Şti.
				</div>
				<div class="flex items-start w-full mb-2">
					<MailIcon />
					info@aktekinofset.com
				</div>
				<div class="flex items-start w-full mb-2">
					<PhoneIcon />0 258 242 10 87
				</div>

				<div class="flex items-start w-full mb-2">
					<MobileIcon />0 554 498 93 30
				</div>

				<div class="flex flex-wrap items-start w-full mb-2">
					<HomeIcon />
					Hacıeyüplü Mah. 3224 Sk. No:8/1 Merkezefendi DENİZLİ
				</div>
			</div>
			<div class="w-full lg:w-1/3">
				<img
					src="https://res.cloudinary.com/erkasoft/image/upload/v1644997448/aktekinofset.com/10a_n83k2j.jpg"
					alt="aktekin kutu ambalaj"
width="300px" height="300px"
				/>
			</div>
		</div>
	</Container>
</div>
<div>map area</div>

<style type="text/css" media="screen">
	.splide__slide {
		height: 500px;
	}
</style>
