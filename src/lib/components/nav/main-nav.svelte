<script lang="ts">
	import Logo from '$lib/assets/Primary Logo.png';
	import { docsConfig } from '$lib/config/docs.ts';
</script>

<div class="mr-4 hidden w-full items-center justify-between md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<img src={Logo} alt="logo-img" class="h-11 w-11" />
	</a>
	<nav class="flex items-center gap-8 font-sans text-sm tracking-wide">
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class="relative pb-1 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
