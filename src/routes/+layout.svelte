<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/layout/site-header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />
	<!-- <MouseFollower /> -->
	<div class="flex min-h-[calc(100vh-3.5rem)] w-screen bg-background bg-opacity-0">
		{@render children()}
	</div>
	<Footer />
</div>
