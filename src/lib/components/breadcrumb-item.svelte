<script>
	export let text;
	export let url = '/';
	export let current;

	const isHome = url === '/';
</script>

{#if isHome}
	<li class="inline-flex items-center">
		<a href={url} class="inline-flex items-center breadcrumb-link">
			<svg
				class="w-5 h-5 mr-2.5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
				/>
			</svg>
			{text}
		</a>
	</li>
{/if}

{#if !isHome && !current}
	<li>
		<div class="flex items-center">
			<svg
				class="w-6 h-6 text-gray-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
					clipRule="evenodd"
				/>
			</svg>
			<a href={url} class="ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2">
				{text}
			</a>
		</div>
	</li>
	)}
{/if}

{#if current}
	<li>
		<div class="flex items-center">
			<svg
				class="w-6 h-6 "
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
					clipRule="evenodd"
				/>
			</svg>
			<span class="ml-1 link-muted md:ml-2" aria-current="page">
				{text}
			</span>
		</div>
	</li>
{/if}
