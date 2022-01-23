<script>
	export let grayBg = false;
	export let className = '';
</script>

<div class="flex flex-wrap w-full text-primary-700 {className}" class:gray-bg={grayBg}>
	<slot />
</div>
