<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/site-header.svelte';
	let { children } = $props();
</script>

<SiteHeader />
{@render children()}
