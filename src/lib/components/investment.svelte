<script>
	// @ts-nocheck

	import placeholder from '$lib/assets/placeholder_place.webp';
	import Image from './image.svelte';
	import Icon from '@iconify/svelte';
	import { rupiah } from '$lib/js/format';
	export let data = {};
</script>

<div class="rounded shadow-md">
	<div class="bg-blue-700 aspect-video w-full">
		<Image {data} {placeholder} aspectRatio="aspect-video" />
	</div>
	<div class="p-2">
		<div class="flex justify-between items-center gap-10">
			<div class="line-clamp-2 leading-4 text-sm">{data.nama} {data.id}</div>
			<button class="text-xs">{data.sektor}</button>
		</div>
		<div class="text-sm my-2">Value: <span class="font-bold">{rupiah(data.nilai)}</span></div>
		<div class="text-xs text-slate-600 flex gap-2 items-center">
			<span><Icon icon="mdi:location" /></span>
			<span>{data.lokasi}</span>
		</div>
	</div>
</div>
