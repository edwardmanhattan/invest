<script>
	// @ts-nocheck

	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	let map, mapElement;
	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');
			map = leaflet.map(mapElement).setView([51.105, -0.09], 13);
			leaflet
				.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
					maxZoom: 19,
					attribution: '© OpenStreetMap'
				})
				.addTo(map);
		}
	});

	onDestroy(async () => {
		if (map) map.remove();
	});
</script>

<div class="h-96" bind:this={mapElement} />

<style>
	@import 'leaflet/dist/leaflet.css';
</style>
