<script lang="ts">
	import { page } from '$app/state';
	import Logo from '$lib/assets/Primary Logo.png'
	/* import { Globe } from 'lucide-svelte'; */
	import { cn } from '$lib/utils.js';
	import { docsConfig } from '$lib/config/docs.ts';
</script>

<div class="mr-4 hidden w-full justify-between md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<img src={Logo} alt="logo-img" class="h-12 w-12">
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class={cn(
					'transition-colors hover:text-foreground/80',
					page.url.pathname === navItem.href ? 'text-foreground' : 'text-foreground/60'
				)}
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
