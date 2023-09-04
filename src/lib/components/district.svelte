<script>
	// @ts-nocheck

	import placeholder from '$lib/assets/placeholder_place.webp';
	import Image from './image.svelte';

	export let data = {};
</script>

<div class="aspect-square relative">
	<Image {data} {placeholder} aspectRatio="aspect-square" />

	<div class="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-slate-600/80">
		<div class="text-white">{data.nama}</div>
		<button class="px-4 bg-blue-2">
			{data.jumlahProjek}
			{data.jumlahProjek === 1 ? 'Project' : 'Projects'}
		</button>
	</div>
</div>
