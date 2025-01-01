<script>
	import { fade, fly } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import { baseUrl } from '$lib/utils.ts';

	const videoUrl = `${baseUrl}/video/upload/v1735058342/unique-event-productions/banner-video-1.mp4`;
</script>

<div class="flex min-h-full w-full flex-col lg:hidden">
	<!-- Hero Banner Video SECTION -->
	<video
		src={videoUrl}
		aria-label="banner-video"
		loop
		muted
		autoplay
		class="min-h-[50%] object-cover md:h-[50%]"
		in:fade={{ duration: 1000 }}
	>
		<track kind="captions" />
	</video>

	<!-- Texts SECTION -->
	<div
		class="flex h-full flex-col items-center justify-center gap-4 p-4 md:h-[40%]"
		in:fly={{ y: 50, duration: 800 }}
	>
		<div class="text-center font-serif text-3xl" in:fade={{ duration: 800 }}>
			Crafting Unforgettable Experiences
		</div>
		<div class="px-2 text-center" in:fade={{ delay: 200, duration: 800 }}>
			At <span class="font-black text-primary">Unique Event Productions</span>, we bring your dreams
			to life with precision, creativity & passion.
		</div>
		<div in:fly={{ y: 20, duration: 500 }}>
			<Button variant="secondary">Know More</Button>
		</div>
	</div>
</div>
