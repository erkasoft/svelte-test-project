<script>
	export let size = 'medium';
	export let className;

	let ortala = (size =='medium' || size == 'large')
</script>

<div
	class={`px-2 md:p-0 ${className}`}
	class:mx-auto={ortala}
	class:max-w-screen-lg={size == 'medium'}
	class:max-w-screen-2xl={size == 'large'}
>
	<slot />
</div>
