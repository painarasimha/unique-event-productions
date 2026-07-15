<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import MobileNav from '$lib/components/nav/mobile-nav.svelte';
	import MainNav from '$lib/components/nav/main-nav.svelte';
	import { afterNavigate } from '$app/navigation';

	let scrolled = false;
	let path = page.url.pathname;

	afterNavigate(() => {
		path = page.url.pathname;
	});

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 0;
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class={`sticky top-0 z-50 w-full transition-colors duration-300 ${
		path === '/' && !scrolled
			? 'border-b border-transparent bg-transparent text-white'
			: 'border-b border-border bg-background text-foreground'
	}`}
>
	<div class="flex h-16 max-w-screen-2xl items-center md:container">
		<MainNav />
		<MobileNav />
	</div>
</header>
