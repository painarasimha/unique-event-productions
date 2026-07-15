<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '../ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	const imgUrl =
		'https://res.cloudinary.com/db56favi8/image/upload/v1737995012/unique-event-productions/banner-img9.jpg';

	let clients = 0;
	let events = 0;
	let experience = 0;
	const dispatch = createEventDispatcher();

	let visible = false;

	function handleClick() {
		goto('/services');
		dispatch('click');
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

<div class="relative flex h-[calc(100dvh-4rem)] w-full flex-col justify-end overflow-hidden">
	<img
		src={imgUrl}
		alt="Event production company banner"
		class="absolute inset-0 h-full w-full animate-kenBurns object-cover"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

	<div
		class="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center"
	>
		{#if visible}
			<h1
				class="font-serif text-4xl font-medium text-white sm:text-5xl lg:text-7xl"
				in:fade={{ delay: 100 }}
			>
				Unique Event Productions
			</h1>
			<p
				class="text-lg text-white/90 sm:text-xl lg:text-2xl"
				in:fade={{ delay: 200, duration: 600 }}
			>
				Turning Moments into Memories
			</p>
		{/if}
		<div in:fly={{ y: 20, delay: 200 }}>
			<Button
				on:click={handleClick}
				class="rounded-sm bg-primary px-8 py-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
			>
				Learn More
			</Button>
		</div>
	</div>

	<div
		class="relative z-10 flex flex-wrap justify-center gap-2 px-4 pb-10 text-center sm:text-lg md:text-xl"
		in:slide={{ duration: 1000 }}
	>
		<p class="w-full font-sans font-medium text-white">
			{clients}+ Happy Clients &nbsp;|&nbsp; {events}+ Events Planned &nbsp;|&nbsp; {experience}+
			Years of Experience
		</p>
	</div>
</div>
