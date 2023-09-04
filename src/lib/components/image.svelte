<script>
	import { fetchImage } from '$lib/js/fetch';
	export let data;
	export let aspectRatio = 'aspect-square';
	export let placeholder = undefined;
</script>

{#await fetchImage(data.id, data.imageFolder, placeholder)}
	<div class="bg-slate-500 animate-pulse {aspectRatio}" />
{:then photo}
	<img src={photo} alt={data.nama} class="{aspectRatio} w-full object-cover" />
{/await}
