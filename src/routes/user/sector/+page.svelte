<script>
	// @ts-nocheck

	import File from '$lib/components/form/file.svelte';

	let dataGambar;
</script>

<div class="grow overflow-auto p-12">
	<h1>Sector</h1>
	<br />

	<h2>Gambar</h2>
	<File name="gambar" bind:data={dataGambar} />

	<h2>Title</h2>
	<input type="text" />

	<h2>Deskripsi</h2>
	<textarea rows="5" />

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
