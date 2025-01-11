<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { fadeSlideUp } from '$lib/animations.ts';
	import { onMount } from 'svelte';
	import { baseUrl } from '$lib/utils.ts';
	import Button from './ui/button/button.svelte';
	import { createEventDispatcher } from 'svelte';

	const imgUrl = `${baseUrl}/image/upload/v1736612723/unique-event-productions/banner-img4.jpg`;

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

<div
	class="hidden min-h-full w-full flex-col gap-4 p-4 px-16 lg:flex"
	style={`background-image: url('${imgUrl}'); background-size: cover; background-postion: center;`}
	> <!-- TODO make the image fit correct-->
	<div class="absolute inset-0 bg-black/20 z-0"></div>
	<!-- Main SECTION -->
	<div class="flex h-full w-full gap-8 px-8 py-8 z-10">
		<!-- Right Side Text SECTION -->
		<div class="flex w-full flex-col items-center justify-center gap-4">
			{#if visible}
				<h1
					class="animate-gradient-text font-serif text-8xl font-bold text-white"
					in:fade={{ delay: 3 * 300 }}
				>
					Unique Event Productions
				</h1>
				<p class="text-2xl text-white font-medium" in:fade={{ delay: 800, duration: 600 }}>Turning Moments into Memories</p>
			{/if}
			<div in:fly={{ y: 20, duration: 500 }}>
				<Button
					on:click={handleClick}
					class="relative overflow-hidden rounded-lg bg-[#ffbf00] px-6 py-2 transition-all duration-300 hover:text-black hover:before:w-full
	{isClicked ? 'scale-95' : 'scale-100'}"
				>
					<span>Learn More</span>
				</Button>
			</div>
		</div>
	</div>

	<!-- Bottom SECTION -->
	<div
		class="flex h-fit w-full p-5 z-10"
		in:slide={{ duration: 1000 }}
		style="animation: slideIn 0.5s ease-out {3 * 0.2}s forwards;"
	>
		<p class="w-full text-center text-2xl font-semibold text-white">
			{clients}+ Happy Clients | {events}+ Events Planned | {experience}+ Years of Experience
		</p>
	</div>
</div>
