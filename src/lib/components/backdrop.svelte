<script>
	import { fade } from 'svelte/transition';
	export let mobile;
</script>

<div class={`backdrop`} class:hidden={mobile != true} transition:fade />
