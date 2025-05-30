<script lang="ts">
	import Logo from '$lib/assets/Primary Logo.png';
	import { docsConfig } from '$lib/config/docs.ts';
</script>

<div class="mr-4 hidden w-full justify-between md:flex">
	<a
		href="/"
		class="mr-6 flex items-center space-x-2 transition-transform duration-300 hover:animate-rotate360 hover:ease-out"
	>
		<img src={Logo} alt="logo-img" class="h-12 w-12" />
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class="relative transition-transform duration-300 after:absolute after:bottom-0 after:left-0 after:top-[18px] after:h-[5px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-[#ffbf00] after:to-[#ffc800] after:transition-all after:duration-500 after:ease-in-out hover:scale-110 hover:after:w-full"
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
