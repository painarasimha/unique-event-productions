<script>
	import Button from '$lib/components/ui/button/button.svelte';

	const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
	const videoUrl = `https://res.cloudinary.com/${cloudname}/video/upload/v1735058342/unique-event-productions/banner-video.mp4`;
</script>

<div class="flex min-h-full w-full flex-col lg:hidden">
	<!-- Hero Banner Video SECTION -->
	<video
		src={videoUrl}
		aria-label="banner-video"
		loop
		muted
		autoplay
		class="min-h-[50%] object-cover md:h-[50%]"><track kind="captions" /></video
	>

	<!-- Texts SECTION -->
	<div class="flex h-full flex-col items-center justify-center gap-4 p-4 md:h-[40%]">
		<div class="text-center font-serif text-3xl">Crafting Unforgettable Experiences</div>
		<div class="px-2 text-center">
			At <span class="font-black text-primary">Unique Event Productions</span>, we bring your dreams
			to life with precision, creativity & passion.
		</div>
		<Button variant="secondary">Know More</Button>
	</div>
</div>
