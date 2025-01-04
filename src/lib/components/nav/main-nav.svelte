<script lang="ts">
	import { page } from '$app/state';
	import Logo from '$lib/assets/Primary Logo.png'
	/* import { Globe } from 'lucide-svelte'; */
	import { cn } from '$lib/utils.js';
	import { docsConfig } from '$lib/config/docs.ts';
</script>

<div class="mr-4 hidden w-full justify-between md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2 transition-transform duration-300 hover:animate-rotate360 hover:ease-out">
		<img src={Logo} alt="logo-img" class="h-12 w-12">
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class='relative after:duration-700 after:ease-in-out transition-transform duration-300 hover:scale-110 after:absolute after:bottom-0 after:top-[18px] after:left-0 after:h-[5px] after:w-0 after:bg-gradient-to-r after:from-[#ffbf00] after:to-[#ffc800] after:rounded-full after:transition-all hover:after:w-full'
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
