<script>
	import Investment from '$lib/sections/investment.svelte';
	import District from '$lib/sections/district.svelte';
	import Carousel from '$lib/components/carousel.svelte';
	import Map from '$lib/components/map.svelte';
	import Sector from '$lib/sections/sector.svelte';
</script>

<div class="py-6 px-16">
	<div class="border border-black/70 rounded p-6 my-2">
		<Carousel />
	</div>

	<div class="flex justify-between items-center gap-48 p-6 my-6">
		<div>
			<div class="text-2xl font-bold">Tentang Probolinggo</div>
			<br />

			<p class="my-2">
				Selain pariwisata, sektor pertanian juga menawarkan peluang investasi yang menjanjikan.
				Probolinggo memiliki lahan pertanian yang subur dan produktif, cocok untuk berbagai jenis
				tanaman seperti tebu, padi, dan sayuran. Dukungan pemerintah daerah yang berfokus pada
				pengembangan sektor pertanian dan kebijakan yang kondusif untuk investor pertanian menjadi
				daya tarik tersendiri bagi para investor yang tertarik berinvestasi di sektor ini.
			</p>
			<p>
				Selain sektor pariwisata dan pertanian, Probolinggo juga memiliki potensi investasi di
				sektor industri dan perdagangan. Letaknya yang strategis, dekat dengan Pelabuhan Tanjung
				Tembaga dan Pelabuhan Probolinggo, serta aksesibilitas yang baik melalui jaringan jalan dan
				kereta api, menjadikan kota ini sebagai pusat distribusi barang dan akses ekspor-impor yang
				menjanjikan.
			</p>
		</div>
		<div>
			<iframe
				src="https://www.youtube.com/embed/KzqeNYQEmus?modestbranding=1"
				title="..."
				class="aspect-video w-96"
			/>
		</div>
	</div>

	<div class="my-6">
		<h2 class="text-xl font-bold mb-6">Peluang Investasi</h2>
		<Map />

		<Investment />
		<button class="ml-auto my-3 px-4 py-2">Lihat Selengkapnya</button>
	</div>

	<div class="my-6">
		<h2 class="text-xl font-bold mb-6">Daerah</h2>
		<District />
		<button class="ml-auto my-3 px-4 py-2">Lihat Selengkapnya</button>
	</div>

	<div class="my-6">
		<h2 class="text-xl font-bold mb-6">Sektor</h2>
		<Sector />
		<button class="ml-auto my-3 px-4 py-2">Lihat Selengkapnya</button>
	</div>
</div>
