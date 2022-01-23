<script>
	export let className = '';
</script>

<div class="{className} ">
	<ul class="hidden  z-50 xl:flex xl:visible">
		<slot />
	</ul>
</div>
