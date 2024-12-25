<script lang="ts">
	import MobileNav from './nav/mobile-nav.svelte';
	import MainNav from './nav/main-nav.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="flex h-14 max-w-screen-2xl items-center md:container">
		<MainNav />
		<MobileNav />
	</div>
</header>
