<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/site-header.svelte';
	let { children } = $props();
</script>

<div class="relative">
	<SiteHeader />
	<div class="absolute top-0 flex min-h-[100dvh] w-screen pt-14">
		{@render children()}
	</div>
</div>
