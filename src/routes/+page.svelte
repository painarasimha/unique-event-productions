<script lang="ts">
	import banner from '$lib/assets/hero-banner.mp4';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="flex min-h-full w-full flex-col">
	<!-- Hero Banner Video SECTION -->
	<!-- TODO : Use cloudinary to store video -->
	<video src={banner} aria-label="banner-video" loop muted autoplay class="min-h-[50%] object-cover"
		><track kind="captions" /></video
	>

	<!-- Texts SECTION -->
	<div class="px flex h-full flex-col items-center justify-center gap-4 p-4">
		<div class="text-center font-serif text-[1.7rem]">Crafting Unforgettable Experiences</div>
		<div class="px-2 text-center">
			At <span class="font-black text-primary">Unique Event Productions</span>, we bring your dreams
			to life with precision, creativity & passion.
		</div>
		<Button variant="secondary">Know More</Button>
	</div>
</div>
