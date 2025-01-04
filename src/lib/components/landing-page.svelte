<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { fadeSlideUp } from '$lib/animations.ts';
	import Button from './ui/button/button.svelte';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import img1 from '$lib/assets/corporate.avif';
	import img2 from '$lib/assets/festival.avif';
	import img3 from '$lib/assets/wedding.avif';

	let clients = 0;
	let events = 0;
	let experience = 0;
	const dispatch = createEventDispatcher();

	let visible = false;

	let isClicked = false;
	let particles: Array<{ x: number; y: number; angle: number }> = [];

	function handleClick(e: MouseEvent) {
		isClicked = true;
		createParticles(e);
		setTimeout(() => (isClicked = false), 200);
		dispatch('click');
	}

	function createParticles(e: MouseEvent) {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		particles = Array.from({ length: 10 }, (_, i) => ({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
			angle: (i * 36 * Math.PI) / 180
		}));
		setTimeout(() => (particles = []), 1000);
	}

	const incrementNumber = (target: number, setter: (value: number) => void, duration: number) => {
		const stepTime = Math.max(Math.floor(duration / target), 10); // Ensures a smooth animation
		let current = 0;

		const increment = () => {
			current += Math.ceil(target / (duration / stepTime));
			if (current >= target) {
				setter(target); // Ensure exact target value at the end
				clearInterval(interval);
			} else {
				setter(current);
			}
		};

		const interval = setInterval(increment, stepTime);
	};

	onMount(() => {
		incrementNumber(100, (value) => (clients = value), 2000); // Increment to 100+ in 2 seconds
		incrementNumber(500, (value) => (events = value), 2500); // Increment to 500+ in 2.5 seconds
		incrementNumber(10, (value) => (experience = value), 1500); // Increment to 10+ in 1.5 seconds

		visible = true;
	});
</script>

<div class="hidden min-h-full w-full flex-col gap-4 p-4 px-16 lg:flex">
	<!-- Main SECTION -->
	<div class="flex h-full w-full gap-8 px-8 py-8">
		<!-- Left Side Images SECTION -->
		{#if visible}
			<div class="flex w-[70%] gap-8">
				<!-- First Column of 2 Images -->
				<div class="flex w-full flex-col gap-8">
					<div class="h-full w-full" in:fadeSlideUp={{ delay: 1 * 200 }}>
						<img src={img1} alt="Event" class="h-full w-full transform rounded-3xl object-cover shadow-md shadow-white transition-all duration-500 filter blur-[2px] hover:blur-none hover:scale-110" />
					</div>
					<div class="h-full w-full" in:fadeSlideUp={{ delay: 2 * 200 }}>
						<img src={img2} alt="Event" class="h-full w-full transform rounded-3xl object-cover shadow-md shadow-white filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110" />
						<!-- TODO little modification neede - kenBurns-->
					</div>
				</div>
				<!-- Second Column of 1 Image -->
				<div class="flex w-full items-center">
					<div class="h-[50%] w-full overflow-hidden group relative rounded-3xl" in:fadeSlideUp={{ delay: 1 * 200 }}>
						<img src={img3} alt="Event" class="h-full w-full object-cover shadow-md shadow-white" />
						<div class="absolute inset-0 bg-gradient-to-t from-[#ffb300] to-transparent translate-y-full group-hover:translate-y-20 transition-transform duration-700"></div>
					</div>
				</div>
			</div>
		{/if}

		<!-- Right Side Text SECTION -->
		<div class="flex w-full flex-col items-center justify-center gap-4">
			{#if visible}
				<h1
					class="animate-gradient-text font-serif text-6xl font-bold text-primary hover:animate-float"
					in:fade={{ delay: 3 * 300 }}
				>
					Unique Event Productions
				</h1>
				<p class="text-lg" in:fade={{ delay: 800, duration: 600 }}>Turning Moments into Memories</p>
			{/if}
			<div in:fly={{ y: 20, duration: 500 }}>
				<Button
					on:click={handleClick}
					class="relative overflow-hidden rounded-lg border-2 border-[#ffbf00] bg-transparent px-6 py-2 transition-all duration-300 
  hover:text-black hover:before:w-full
	{isClicked ? 'scale-95' : 'scale-100'}"
				>
					<div
						class="absolute inset-0 -z-10 w-0 bg-gradient-to-r from-[#ffbf00] to-[#bf9b30] transition-all duration-300"
					>
						<span>Learn More</span>
						{#each particles as particle}
							<div
								class="pointer-events-none absolute h-2 w-2 rounded-full bg-[#ffbf00]"
								style="left: {particle.x}px; top: {particle.y}px; 
      animation: particle 1s ease-out forwards;"
							></div>
							<!-- TODO particles not working -->
						{/each}
					</div>
				</Button>
			</div>
		</div>
	</div>

	<!-- Bottom SECTION -->
	<div
		class="flex h-fit w-full"
		in:slide={{ duration: 1000 }}
		style="animation: slideIn 0.5s ease-out {3 * 0.2}s forwards;"
	>
		<p class="w-full text-center">
			{clients}+ Happy Clients | {events}+ Events Planned | {experience}+ Years of Experience
		</p>
	</div>
</div>
