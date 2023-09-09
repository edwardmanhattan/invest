<script>
	import logo from '$lib/assets/logo.webp';
</script>

<div class="px-5 py-2 bg-slate-100 text-blue-3 flex">
	<div class="grid place-items-center">
		<img src={logo} alt="Logo App Invest" class="w-20" />
	</div>
	<nav class="ml-auto flex items-center gap-6 font-bold text-sm">
		<a href="/">HOME</a>
		<a href="/investment">PELUANG</a>
		<a href="/district">DAERAH</a>
		<a href="/sector">SEKTOR</a>
		<a href="/user/homepage" class="text-amber-600">UMKM</a>
		<a href="/investment">
			<button class="text-sm p-2 font-normal">Peluang Investasi</button>
		</a>
	</nav>
</div>

<style lang="postcss">
	@tailwind components;
	@layer components {
		a {
			@apply hover:underline;
		}
	}
</style>
