<script charset="utf-8">
	import Container from '$lib/components/container.svelte';
	import PageHeader from '$lib/components/page-header.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import BreadcrumbItem from '$lib/components/breadcrumb-item.svelte';
	import PhotoGallery from '$lib/components/photo-gallery/main.svelte';

	import { productImage1, productImage2, productImage3, productImage4 } from '$lib/constants';

	let productImages = [productImage1, productImage2, productImage3, productImage4];
</script>

<Breadcrumbs>
	<BreadcrumbItem text="Ana Sayfa" url="/" />
	<BreadcrumbItem text="Ürün Detayı" url="/product-category" current />
</Breadcrumbs>
<PageHeader title="Product Category" layout="minimal" />
<div class="w-full pb-16 text-sm lg:px-2 lg:text-lg page-content">
	<Container>
		<PhotoGallery photos={productImages} />
	</Container>
</div>
