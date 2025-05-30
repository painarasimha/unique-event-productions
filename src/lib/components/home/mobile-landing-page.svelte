<script>
	import { fade, fly } from 'svelte/transition';
	import { Mouse } from 'lucide-svelte';
	import { baseUrl } from '$lib/utils.ts';

	const videoUrl = `${baseUrl}/video/upload/v1735058342/unique-event-productions/banner-video-1.mp4`;
</script>

<div class="relative flex min-h-full w-full flex-col overflow-hidden bg-black lg:hidden">
	<!-- Hero Banner Video SECTION -->
	<video
		src={videoUrl}
		aria-label="banner-video"
		loop
		muted
		autoplay
		class="h-[calc(100dvh-3.5rem )] scale-125 object-cover opacity-30"
		in:fade={{ duration: 1000 }}
	>
		<track kind="captions" />
	</video>

	<!-- Hero Title -->
	<div class="absolute flex h-full items-center justify-center p-2">
		<h1
			class="text-center font-serif text-4xl font-semibold text-white"
			in:fly={{ y: -50, duration: 1000 }}
			out:fly={{ y: 50, duration: 500 }}
		>
			Crafting Unforgettable Experiences
		</h1>
	</div>

	<!-- Mouse hover Icon -->
	<div
		class="absolute bottom-2 left-[50%] -translate-x-[50%]"
		in:fly={{ y: 20, duration: 800, delay: 500 }}
		out:fly={{ y: -20, duration: 500 }}
	>
		<Mouse class="h-8 w-8 text-white" />
	</div>
</div>
