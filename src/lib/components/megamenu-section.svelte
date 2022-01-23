<script>
	export let title;
	export let detail;
</script>

<div
	class="w-1/2 w-full px-4 pt-2 pb-2 border-b md:w-1/3 lg:w-1/5 border-primary-600 lg:border-b-0 lg:pt-3"
>
	{#if title}
		<div class="flex items-center">
			<h3 class="mb-2 text-sm lg:text-md text-bold">{title}</h3>
		</div>
	{/if}

	{#if detail}
		<p class="text-sm text-gray-100">{detail}</p>
		}
	{/if}

	<div class="flex flex-col py-1">
		<slot />
	</div>
</div>
