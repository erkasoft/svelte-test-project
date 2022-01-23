<script>
	import Container from '$lib/components/container.svelte';
</script>

<div class="w-full breadcrumb-container">
	<Container>
		<nav class="flex py-2 text-sm " aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<slot />
			</ol>
		</nav>
	</Container>
</div>
