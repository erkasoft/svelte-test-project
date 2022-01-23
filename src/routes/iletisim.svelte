<script>
	import Container from '$lib/components/container.svelte';
	import PageHeader from '$lib/components/page-header.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import BreadcrumbItem from '$lib/components/breadcrumb-item.svelte';
	import Row from '$lib/components/row.svelte';
</script>

<Breadcrumbs>
	<BreadcrumbItem text="Ana Sayfa" url="/" />
	<BreadcrumbItem text="İletişim" url="/iletisim" current />
</Breadcrumbs>


<PageHeader title="İletişim" layout="minimal" />

