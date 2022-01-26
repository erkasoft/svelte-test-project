<script charset="utf-8">
    import '$lib/css/app.css' 
	import Header  from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>


<div class="wrapper">
<Header />
	<main class="min-h-full">
		<slot />
	</main>
<Footer />
</div>
    
