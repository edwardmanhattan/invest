<script>
	// @ts-nocheck
	import Map from '$lib/components/map.svelte';
	import Investment from '$lib/sections/investment.svelte';
</script>

<div class="py-6 px-16">
	<h1 class="text-2xl font-bold mb-6">Peluang Investasi</h1>
	<Map />
	<Investment filter="true" />
</div>
