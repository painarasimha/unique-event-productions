<script>
	import MobileLandingPage from '$lib/components/home/mobile-landing-page.svelte';
	import LandingPage from '$lib/components/home/landing-page.svelte';
	import EventSection from '../layout/event-section.svelte';
</script>

<div class="flex w-full flex-col">
	<MobileLandingPage />
	<LandingPage />
	<EventSection />
</div>
