<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/site-header.svelte';
	import MouseFollower from '$lib/components/mouse-follower.svelte';
	let { children } = $props();
</script>

<div class="relative">
	<SiteHeader />

	<MouseFollower />
	<div class="absolute top-0 -z-10 flex min-h-[100dvh] w-screen bg-background bg-opacity-0 pt-14">
		{@render children()}
	</div>
</div>
