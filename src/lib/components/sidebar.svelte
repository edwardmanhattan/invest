<script>
	import logo from '$lib/assets/logo.webp';
	import SidebarMenu from './sidebar-menu.svelte';
</script>

<div class="w-2/12 px-2 py-5 bg-slate-100 h-screen text-blue-3 flex flex-col justify-between">
	<div class="grid place-items-center w-20 mx-auto">
		<img src={logo} alt="Logo App Invest" class="w-20" />
	</div>
	<nav class="flex flex-col text-sm gap-1">
		<SidebarMenu anchor="Content" href="/user/homepage" icon="mdi:table">
			<SidebarMenu anchor="Homepage" href="/user/homepage" />
			<SidebarMenu anchor="Peluang Investasi" href="/user/peluang" />
			<SidebarMenu anchor="District" href="/user/district" />
			<SidebarMenu anchor="Sector " href="/user/sector" />
		</SidebarMenu>
		<SidebarMenu anchor="Logout" href="/logout" icon="mdi:logout" />
	</nav>
	<div />
</div>

<style lang="postcss">
	@tailwind components;
	@layer components {
		a {
			@apply hover:underline;
		}
	}
</style>
