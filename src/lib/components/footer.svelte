<script>
	import SimpleMenu from '$lib/components/simplemenu.svelte';
	import { MENU_ITEMS } from '$lib/constants';
  import ExternalLink from '$lib/components/external-link.svelte';

	const startDate = import.meta.env.VITE_START_DATE;
	/*export let siteTitle = 'Svelte Starter';*/
	export let footerMenu = MENU_ITEMS;
	let siteTitle = import.meta.env.VITE_SITE_TITLE;
</script>

    <footer class="w-full py-10 bg-transparent">
      <div class="w-full py-5 text-xs lg:text-sm">
        <div class="container flex flex-wrap py-3 md:py-0 mx-auto text-gray-600 ">
          <div class="w-full items-center justify-center md:justify-start flex flex-wrap items-center justify-center md:w-1/2">
            <SimpleMenu menuItems={footerMenu} />
          </div>
          <div class="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            &copy; {startDate} - {new Date().getFullYear()}
            <span class="mx-2 font-bold">{siteTitle}</span>
 All right reserved.
          </div>
<div class="w-full items-center justify-center flex pt-10">

            <ExternalLink href="https://erkasoft.com">Erkasoft</ExternalLink>
        </div>
      </div>
    </footer>

