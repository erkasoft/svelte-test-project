<script>
	import Container from '$lib/components/container.svelte';
	import PageHeader from '$lib/components/page-header.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import BreadcrumbItem from '$lib/components/breadcrumb-item.svelte';
	import Row from '$lib/components/row.svelte';
</script>

<Breadcrumbs>
	<BreadcrumbItem text="Ana Sayfa" url="/" />
	<BreadcrumbItem text="Hakkımızda" url="/hakkimizda" current />
</Breadcrumbs>
<PageHeader title="About" layout="minimal" />
<div class="w-full pb-16 text-sm lg:px-2 lg:text-lg page-content">
	<Container>
		<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>




	</Container>
</div>
