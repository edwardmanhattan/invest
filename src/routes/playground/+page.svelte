<script>
	// @ts-nocheck

	import File from '$lib/components/form/file.svelte';

	let something;
</script>

<div class="p-12">
	<File name={something} bind:data={something} />
</div>
