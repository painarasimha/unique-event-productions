<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/site-header.svelte';
	import MouseFollower from '$lib/components/mouse-follower.svelte';
	import Footer from '$lib/components/footer.svelte';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />

	<MouseFollower />
	<div class=" -z-10 flex min-h-[calc(100vh-3.5rem)] w-screen bg-background bg-opacity-0">
		{@render children()}
	</div>

	<Footer className="" />
</div>
