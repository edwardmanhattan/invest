<script>
	// @ts-nocheck

	import Thumbnail from '$lib/components/investment.svelte';
	import Searchbar from '$lib/components/investment-searchbar.svelte';
	import Filter from '$lib/components/investment-filter.svelte';
	import Pagination from '$lib/js/pagination';
	import { onMount } from 'svelte';
	import { exec } from '$lib/js/fetch';

	export let searchbar = true;
	export let filter = false;
	export let interval = 8;

	let data, display, pagination;
	onMount(async () => {
		data = await exec(`/getInvestment.json`);
		pagination = new Pagination(data, interval);
		display = pagination.chop();
	});
</script>

{#if searchbar === true}
	<Searchbar />
{/if}

<div class="flex gap-4">
	{#if filter}
		<div class="w-1/2 border">
			<Filter />
		</div>
	{/if}
	<div class="grid grid-cols-4 gap-4">
		{#each display ?? [] as data}
			<Thumbnail {data} />
		{/each}
	</div>
</div>
