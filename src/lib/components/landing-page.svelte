<script lang="ts">
	import Button from './ui/button/button.svelte';
</script>

<div class="hidden min-h-full w-full flex-col gap-4 p-4 px-16 lg:flex">
	<!-- Main SECTION -->
	<div class="flex h-full w-full gap-8 px-8 py-8">
		<!-- Left Side Images SECTION -->
		<div class="flex w-[70%] gap-8">
			<!-- First Column of 2 images -->
			<div class="flex w-full flex-col gap-8">
				<!-- TODO (Narasimha) : Replace the divs with Images -->
				<div class="h-full w-full rounded-3xl bg-gray-300 shadow-md shadow-white"></div>
				<div class="h-full w-full rounded-3xl bg-gray-300 shadow-md shadow-white"></div>
			</div>
			<!-- Second Column of 1 Image -->
			<div class="flex w-full items-center">
				<!-- TODO (Narasimha) : Replace the div with Imagea -->
				<div class="h-[50%] w-full rounded-3xl bg-gray-300 shadow-md shadow-white"></div>
			</div>
		</div>
		<!-- Right Side Text SECTION -->
		<div class="flex flex-col w-full items-center justify-center gap-4">
			<h1 class="font-serif text-6xl font-bold text-primary">Crafting Unforgettable Experiences</h1>
			<div class="px-2 w-[500px] break-words">
				At <span class="font-black text-primary">Unique Event Productions</span>, we bring your dreams
				to life with precision, creativity & passion.
			</div>
			<Button variant="secondary">Know More</Button>
		</div>
	</div>

	<!-- Bottom SECTION -->
	<div class="flex h-fit w-full">
		<p class="w-full text-center">
			100+ Happy Clients | 500+ Events Planned | 10+ Years of Experience
		</p>
	</div>
</div>
