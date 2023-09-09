<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	export let icon = '';
	export let anchor;
	export let href;

	let open = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="border border-black/30 rounded bg-slate-100 hover:bg-blue-2/80 hover:border-white">
	<div
		on:click|stopPropagation={() => {
			if ($$slots.default) open = !open;
			else document.location.href = href;
		}}
		class="menu"
	>
		{#if icon !== ''}
			<div class="w-2">
				<Icon width="20px" {icon} />
			</div>
		{:else}
			<div class="w-2" />
		{/if}

		<a class="min-w-fit" {href}>{anchor}</a>

		{#if $$slots.default}
			<div class="w-2">
				<Icon icon="bi:caret-down-fill" />
			</div>
		{:else}
			<div class="w-2" />
		{/if}
	</div>

	{#if $$slots.default && open}
		<div class="flex flex-col p-1 pl-4 gap-1">
			<slot />
		</div>
	{/if}
</div>

<style lang="postcss">
	@tailwind components;
	@layer components {
		.menu {
			@apply p-2 flex items-end justify-center gap-6 hover:text-white cursor-pointer;
		}
	}
</style>
