<script>
	// @ts-nocheck

	export let name;
	export let data;
	export let placeholder = 'Pilih file...';
</script>

<label for={name} class="flex w-full text-sm">
	<input type="file" {name} id={name} bind:value={data} class="w-0 h-0" />
	<div class="rounded-l bg-slate-100 italic text-slate-700 p-2 border border-black/50 grow">
		{placeholder}
	</div>
	<div class="py-2 w-24 grid place-items-center bg-blue-2 text-white rounded-r">Browse</div>
</label>
