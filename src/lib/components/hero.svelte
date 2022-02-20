<script>
	export let title = 'Başlık'
	export let message = ''
	export let buttonLink = '#'
	export let buttonText = ''
    export let image = ''
    export let size = 'normal'
</script>




    <div class='w-full bg-gray-100 h-auto z-0'>
      <div class='container mx-auto py-20 text-center animate__animated animate__fadeIn animate__slower'>
        <h1 class='text-5xl py-10 text-gray-600 font-semibold '>
          {title}
        </h1>

		{#if message != ''}
        <p class='text-2xl text-gray-500 py-10'>{message}</p>
		{/if}


		{#if buttonText != ''}
        <Button to={buttonLink} size='large'>
          {buttonText}
        </Button>
		{/if}
      </div>
    </div>
