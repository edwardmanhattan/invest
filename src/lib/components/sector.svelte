<script>
	// @ts-nocheck
	import placeholder from '$lib/assets/placeholder_place.webp';
	import Image from './image.svelte';

	export let data = {};
</script>

<div class="aspect-square relative">
	<Image {data} {placeholder} aspectRatio="aspect-square" />

	<div class="absolute inset-0 flex flex-col gap-2 items-center justify-center">
		<a href="/sector/detail" class="w-11/12">
			<button class="p-3 mx-auto">
				{data.nama}
			</button>
		</a>
	</div>
</div>
