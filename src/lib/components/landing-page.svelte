<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import Button from './ui/button/button.svelte';
	import { onMount } from 'svelte';

	let clients = 0;
	let events = 0;
	let experience = 0;

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
	});
</script>

<div class="hidden min-h-full w-full flex-col gap-4 p-4 px-16 lg:flex">
	<!-- Main SECTION -->
	<div class="flex h-full w-full gap-8 px-8 py-8">
		<!-- Left Side Images SECTION -->
		<div class="flex w-[70%] gap-8">
			<!-- First Column of 2 Images -->
			<div class="flex w-full flex-col gap-8">
				<div
					class="h-full w-full rounded-3xl bg-gray-300 shadow-md shadow-white"
					in:fly={{ y: -50, duration: 800 }}
				></div>
				<div
					class="h-full w-full rounded-3xl bg-gray-300 shadow-md shadow-white"
					in:fly={{ y: 50, duration: 800 }}
				></div>
			</div>
			<!-- Second Column of 1 Image -->
			<div class="flex w-full items-center" in:fly={{ y: -30, duration: 1000 }}>
				<div class="h-[50%] w-full rounded-3xl bg-gray-300 shadow-md shadow-white"></div>
			</div>
		</div>

		<!-- Right Side Text SECTION -->
		<div
			class="flex w-full flex-col items-center justify-center gap-4"
			in:fade={{ duration: 1000 }}
		>
			<h1 class="font-serif text-6xl font-bold text-primary" in:fly={{ x: 50, duration: 800 }}>
				Unique Event Productions
			</h1>
			<p class="text-lg" in:fade={{ delay: 200, duration: 800 }}>Turning Moments into Memories</p>
			<div in:fly={{ y: 20, duration: 500 }}>
				<Button>Learn More</Button>
			</div>
		</div>
	</div>

	<!-- Bottom SECTION -->
	<div class="flex h-fit w-full" in:slide={{ duration: 1000 }}>
		<p class="w-full text-center">
			{clients}+ Happy Clients | {events}+ Events Planned | {experience}+ Years of Experience
		</p>
	</div>
</div>
