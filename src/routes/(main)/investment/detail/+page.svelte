<script>
	// @ts-nocheck

	import placeholder from '$lib/assets/placeholder_place.webp';
	import Image from '$lib/components/image.svelte';
	import Icon from '@iconify/svelte';
	import { exec } from '$lib/js/fetch';
	import { rupiah } from '$lib/js/format';
	import { onMount } from 'svelte';
	import Map from '$lib/components/map.svelte';

	let data = {
		nilai: 0
	};
	onMount(async () => {
		data = await exec(`/getDetailInvestment.json`);
	});
</script>

<div class="py-6 px-16">
	<div class="font-bold text-2xl mb-6">POTENSI SEKTOR PARIWISATA</div>
	<Image {data} {placeholder} aspectRatio="aspect-hero" />
	<br />

	<div class="grid grid-cols-2 gap-16">
		<div>
			<h2 class="font-semibold text-xl mb-6">Deskripsi</h2>
			<p class="text-justify">
				Selain pariwisata, sektor pertanian juga menawarkan peluang investasi yang menjanjikan.
				Probolinggo memiliki lahan pertanian yang subur dan produktif, cocok untuk berbagai jenis
				tanaman seperti tebu, padi, dan sayuran. Dukungan pemerintah daerah yang berfokus pada
				pengembangan sektor pertanian dan kebijakan yang kondusif untuk investor pertanian menjadi
				daya tarik tersendiri bagi para investor yang tertarik berinvestasi di sektor ini. Selain
				sektor pariwisata dan pertanian, Probolinggo juga memiliki potensi investasi di sektor
				industri dan perdagangan. Letaknya yang strategis, dekat dengan Pelabuhan Tanjung Tembaga
				dan Pelabuhan Probolinggo, serta aksesibilitas yang baik melalui jaringan jalan dan kereta
				api, menjadikan kota ini sebagai pusat distribusi barang dan akses ekspor-impor yang
				menjanjikan.
			</p>
		</div>
		<div>
			<h2 class="font-semibold text-xl mb-6">Informasi</h2>
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Investment Value</div>
						<div class="font-bold">{rupiah(data.nilai)}</div>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Total Area / Land Status</div>
						<div class="font-bold">405 ha</div>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Market Analysis</div>
						<div class="font-bold">Terbatasnya fasilitas sejenis di Jawa Timur bagian Timur</div>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Mode of Offer</div>
						<div class="font-bold">BOT</div>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Project Status</div>
						<div class="font-bold">Belum disusun project prospectus</div>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Progress</div>
						<div class="font-bold">Sudah ada peminat (Prime 4.0)</div>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<Icon icon="mdi:target" />
					<div>
						<div class="text-slate-600">Location</div>
						<div class="font-bold">Kecamatan Sumberasih</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<br />

	<h2 class="font-semibold my-4">PETA</h2>
	<Map />
	<br />

	<h2 class="font-semibold my-4">INFORMASI & INFOMEMO</h2>
	<div class="p-6 rounded border border-black" />
	<br />

	<h2 class="font-semibold my-4">GALERI</h2>
	<div class="p-6 rounded border border-black" />
	<br />
</div>
