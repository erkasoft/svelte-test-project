<script>
	import PhotoCard from "$lib/components/photo-gallery/card.svelte";
	export let photos = []
	export let className = 'w-full'
</script>



    <div class="{className} grid grid-cols-3 lg:grid-cols-4 gap-1">
	
		{#each photos as photo, index}

        <PhotoCard photo={photo}  />

		{/each}
    </div>

