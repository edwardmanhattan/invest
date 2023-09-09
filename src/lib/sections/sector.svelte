<script>
	// @ts-nocheck

	import Thumbnail from '$lib/components/sector.svelte';
	import Pagination from '$lib/js/pagination';
	import { fiero } from '$lib/js/fetch';
	import { onMount } from 'svelte';

	export let interval = 8;

	let data, display, pagination;
	onMount(async () => {
		data = await fiero(`/getSector.json`);
		pagination = new Pagination(data, interval);
		display = pagination.chop();
	});
</script>

<div class="grid grid-cols-4 gap-4">
	{#each display ?? [] as data}
		<Thumbnail {data} />
	{/each}
</div>
