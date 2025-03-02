<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '../ui/button/button.svelte';

	import { createEventDispatcher } from 'svelte';

	const imgUrl = 'https://res.cloudinary.com/db56favi8/image/upload/v1737995012/unique-event-productions/banner-img9.jpg';

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
		const stepTime = Math.max(Math.floor(duration / target), 10);
		let current = 0;

		const increment = () => {
			current += Math.ceil(target / (duration / stepTime));
			if (current >= target) {
				setter(target);
				clearInterval(interval);
			} else {
				setter(current);
			}
		};

		const interval = setInterval(increment, stepTime);
	};

	onMount(() => {
		incrementNumber(100, (value) => (clients = value), 2000);
		incrementNumber(500, (value) => (events = value), 2500);
		incrementNumber(10, (value) => (experience = value), 1500);

		visible = true;
	});
</script>

<div class="relative flex flex-col gap-4 p-4 lg:px-16 w-full h-[calc(100dvh-3.5rem)]">
	<div class="-top-[3.6rem] left-0 absolute bg-black w-full h-[100dvh] pointer-events-none"></div>
	<img
		src={imgUrl}
		alt="Event production company banner"
		class="-top-[3.6rem] left-0 absolute opacity-50 w-full h-[100dvh] object-cover"
	/>

	<!-- Main Section -->
	<div
		class="z-10 flex flex-wrap justify-center items-center gap-4 lg:gap-8 px-4 lg:px-8 py-8 w-full h-full"
	>
		<!-- Text Section -->
		<div class="flex flex-col justify-center items-center gap-4 w-full md:w-2/3 text-center">
			{#if visible}
				<h1
					class="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-8xl animate-gradient-text"
					in:fade={{ delay: 100 }}
				>
					Unique Event Productions
				</h1>
				<p
					class="font-medium text-white text-lg sm:text-xl lg:text-2xl"
					in:fade={{ delay: 200, duration: 600 }}
				>
					Turning Moments into Memories
				</p>
			{/if}
			<div in:fly={{ y: 20, delay: 200 }}>
				<Button
					on:click={handleClick}
					class="relative overflow-hidden rounded-lg bg-[#ffbf00] px-6 py-4 text-sm transition-all duration-300 hover:text-black hover:before:w-full sm:px-6 sm:py-[1.4rem] sm:text-base lg:text-lg
	{isClicked ? 'scale-95' : 'scale-100'}"
				>
					<span>Learn More</span>
				</Button>
			</div>
		</div>
	</div>

	<!-- Bottom Section -->
	<div
		class="z-10 flex flex-wrap justify-center gap-2 p-4 sm:text-lg md:text-xl lg:text-2xl text-center"
		in:slide={{ duration: 1000 }}
	>
		<p class="w-full font-semibold text-white">
			{clients}+ Happy Clients | {events}+ Events Planned | {experience}+ Years of Experience
		</p>
	</div>
</div>
