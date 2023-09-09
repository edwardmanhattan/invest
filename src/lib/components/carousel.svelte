<script>
	import placeholder from '$lib/assets/carousel.webp';
	import { fieroImage } from '$lib/js/fiero';
	import Icon from '@iconify/svelte';
	export let data = {};
</script>

<div class="carousel relative">
	{#await fieroImage(0, '', placeholder)}
		<div class="layer-1 aspect-carousel border bg-slate-600 animate-pulse" />
	{:then photo}
		<div class="layer-1 aspect-carousel border">
			<img src={photo} alt="carousel." class="object-cover object-center w-full h-full" />
		</div>
	{/await}

	<div
		class="layer-2 absolute bottom-0 h-[50%] bg-gradient-to-t from-slate-900 to-transparent text-white px-16 py-8"
	>
		<div class="ml-auto w-6/12 flex flex-col justify-center h-full">
			<p class="text-3xl font-bold mb-4">KOTA PROBOLINGGO</p>
			<p class="text-sm text-justify leading-7">
				Aspek investasi di Kota Probolinggo menawarkan beragam peluang bagi para calon investor.
				Salah satu potensi investasi yang menjanjikan adalah sektor pariwisata. Dengan pantai-pantai
				indah seperti Pantai Pasir Putih, Pantai Bentar, dan Pantai Kraksaan, Probolinggo memiliki
				daya tarik wisata yang dapat menarik kunjungan wisatawan baik dari dalam maupun luar negeri.
				Investasi di bidang perhotelan, restoran, dan atraksi wisata menjadi pilihan yang cerdas
				untuk mendukung pertumbuhan industri pariwisata di kota ini.
			</p>
		</div>
	</div>

	<div
		class="layer-3 absolute top-0 bottom-0 left-0 w-fit px-3 bg-white/[.01] grid place-items-center"
	>
		<span class="text-4xl text-white cursor-pointer hover:scale-110">
			<Icon icon="uiw:left" />
		</span>
	</div>

	<div
		class="layer-3 absolute top-0 bottom-0 right-0 w-fit px-3 bg-white/[.01] grid place-items-center"
	>
		<span class="text-4xl text-white cursor-pointer hover:scale-110">
			<Icon icon="uiw:right" />
		</span>
	</div>
</div>
