<script>
	export let title = 'Varsayılan';
	export let description = 'Varsayılan açıklama';
	export let siteTitle = import.meta.env.VITE_SITE_TITLE;
	export let customMeta;
	export let meta = {
		type: 'website',
		image: '/logo.svg',
		...customMeta	};

	const twitterUserName = '@ertankayalar';
</script>

<svelte:head>
	<title>{title} - {siteTitle}</title>
	<meta property="og:type" content={meta.type} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={meta.image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={twitterUserName} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={meta.image} />
	{#if meta.date}
		<meta property="article:published_time" content={meta.date} />
	{/if}
</svelte:head>
