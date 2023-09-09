<script>
	// @ts-nocheck

	import File from '$lib/components/form/file.svelte';

	let dataGambar;
</script>

<div class="grow overflow-auto p-12">
	<h1>Peluang Investasi</h1>
	<br />

	<h2>Gambar</h2>
	<File name="gambar" bind:data={dataGambar} />

	<h2>Title</h2>
	<input type="text" />

	<h2>Deskripsi</h2>
	<textarea rows="5" />

	<h2>Sektor</h2>
	<input type="text" />

	<h2>Sub Sektor</h2>
	<input type="text" />

	<h2>Informasi</h2>

	<div class="grid grid-cols-2 items-center gap-4">
		<div>
			<h2>Investment Value</h2>
			<input type="text" />
		</div>
		<div>
			<h2>Total Area</h2>
			<input type="text" />
		</div>
	</div>

	<div class="grid grid-cols-2 items-center gap-4">
		<div>
			<h2>Mode of Offer</h2>
			<input type="text" />
		</div>
		<div>
			<h2>Project Status</h2>
			<input type="text" />
		</div>
	</div>

	<div class="grid grid-cols-2 items-center gap-4">
		<div>
			<h2>Progress</h2>
			<input type="text" />
		</div>
		<div>
			<h2>Location</h2>
			<input type="text" />
		</div>
	</div>

	<h2>Market Analysis</h2>
	<textarea rows="5" />

	<div class="grid grid-cols-2 items-center gap-4">
		<div>
			<h2>Latitude</h2>
			<input type="text" />
		</div>
		<div>
			<h2>Longitude</h2>
			<input type="text" />
		</div>
	</div>

	<h2>Informasi dan Infomemo</h2>
	<textarea rows="5" />

	<h2>Gambar</h2>
	<File name="gambar" bind:data={dataGambar} />

	<br />
	<br />
	<button class="ml-auto p-2 w-24">Simpan</button>
</div>

<style lang="postcss">
	@tailwind components;
	@layer components {
		h1 {
			@apply text-xl font-bold;
		}

		h2 {
			@apply text-sm font-semibold mb-2 mt-4;
		}
	}
</style>
