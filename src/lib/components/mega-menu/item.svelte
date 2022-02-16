<script>
	export let text;
	export let url;
	export let toggleable;
	export let hoverable;
</script>

<li class:toggleable class:hoverable class="megamenu-main-item">
	{#if toggleable}
		<input type="checkbox" value="selected" id="toggle-one" class="toggleInput" />
		<label htmlFor="toggle-one" class="block px-4 py-6 cursor-pointer lg:p-6">
			{text}
		</label>
		<div role="toggle" class="megaMenu p-6 mb-16 sm:mb-0 shadow-xl bg-blue-800 z-50">
			<div class="container flex flex-wrap justify-start w-full mx-2">
				<slot />
			</div>
		</div>
	{/if}

	{#if hoverable}
		<a href="#" class="relative block px-4 py-6 lg:p-6">
			{text}
		</a>
		<div class="megaMenu p-6 mb-16 sm:mb-0 shadow-xl megamenu-hover-item z-50">
			<div class="container flex flex-wrap justify-start w-full mx-2">
				<slot />
			</div>
		</div>
	{/if}

	{#if !toggleable && !hoverable}
		<a href={url} class="relative block px-2 py-6 text-sm lg:p-6">
			{text}
		</a>
	{/if}
</li>

<style>
	/* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
	.megaMenu {
		display: none;
		left: 0;
		position: absolute;
		text-align: left;
		width: 100%;
	}

	/* #hoverable Class Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
	.hoverable {
		position: static;
	}

	/* .hoverable > a:after {
  content: '\25BC';
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
} */

	.hoverable:hover .megaMenu {
		display: block;
	}

	/* #toggle Class Styles
    –––––––––––––––––––––––––––––––––––––––––––––––––– */

	.toggleable > label:after {
		content: '\25BC';
		font-size: 10px;
		padding-left: 6px;
		position: relative;
		top: -1px;
	}

	.toggleInput {
		display: none;
	}
	.toggleInput:not(checked) ~ .megaMenu {
		display: none;
	}

	.toggleInput:checked ~ .megaMenu {
		display: block;
	}

	.toggleInput:checked + label {
		color: white;
		background: #2c5282; /*@apply bg-blue-800 */
	}

	.toggleInput:checked ~ label:after {
		content: '\25B2';
		font-size: 10px;
		padding-left: 8px;
		position: relative;
		top: -1px;
	}
</style>
