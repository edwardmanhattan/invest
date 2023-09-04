<script>
	import Icon from '@iconify/svelte';
	export let data = {};
</script>

<div class="carousel">
	<div class="layer-1" />
	<div class="layer-2" />
	<div class="layer-3">
		<div class="flex items-center justify-between">
			<div>
				<Icon icon="mdi:arrow-left" />
			</div>
			<div>
				<Icon icon="mdi:arrow-right" />
			</div>
		</div>
	</div>
</div>
