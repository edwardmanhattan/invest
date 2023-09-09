<script>
	// @ts-nocheck

	import Image from '$lib/components/image.svelte';
	import placeholder from '$lib/assets/hero.webp';
	import Investment from '$lib/sections/investment.svelte';

	import { onMount } from 'svelte';
	import { fiero } from '$lib/js/fiero';

	let data = {};
	onMount(async () => {
		data = await fiero(`/getDetailSector.json`);
	});
</script>

<div class="py-6 px-16">
	<Image {data} {placeholder} aspectRatio="aspect-hero" />
	<br />

	<h1 class="text-2xl font-bold my-6">{data.nama}</h1>

	<div class="flex items-center gap-10 justify-between">
		<div class="flex flex-col gap-2 basis-7/12">
			<div class="font-semibold">Karakteristik</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis est tempora molestiae
				veritatis ipsam magni in voluptas! Exercitationem nam aliquid ipsa adipisci, enim
				consectetur sunt placeat perferendis tempora voluptatem.
			</p>
			<div class="font-semibold">Sektor</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis est tempora molestiae
				veritatis ipsam magni in voluptas! Exercitationem nam aliquid ipsa adipisci, enim
				consectetur sunt placeat perferendis tempora voluptatem.
			</p>
			<div class="font-semibold">Karakteristik</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis est tempora molestiae
				veritatis ipsam magni in voluptas! Exercitationem nam aliquid ipsa adipisci, enim
				consectetur sunt placeat perferendis tempora voluptatem.
			</p>
			<div class="font-semibold">Sektor</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis est tempora molestiae
				veritatis ipsam magni in voluptas! Exercitationem nam aliquid ipsa adipisci, enim
				consectetur sunt placeat perferendis tempora voluptatem.
			</p>
		</div>
		<div class="w-56 aspect-square bg-blue-3 relative me-4">
			<div class="relative aspect-square -translate-y-4 translate-x-4">
				<Image {data} {placeholder} aspectRatio="aspect-square" />
			</div>
		</div>
	</div>
	<br />

	<h2 class="font-semibold my-6">List Peluang Investasi</h2>
	<Investment searchbar="false" interval="4" />
	<button class="ml-auto my-3 px-4 py-2">Lihat Selengkapnya</button>
	<br />
</div>
