<script lang="ts">
	import img1 from '$lib/assets/wedding.avif';
	import img2 from '$lib/assets/concerts.avif';
	import img3 from '$lib/assets/corporate.avif';
	import img4 from '$lib/assets/rade.avif';
	import img5 from '$lib/assets/party.avif';
	import img6 from '$lib/assets/festival.avif';
	import { onMount } from 'svelte';

	export let service: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
		link: string;
	};
</script>

<div class="transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300">
	<div class="relative h-full">
		<div class="absolute inset-0 bg-black">
			<img
				src={img3}
				alt={service.title}
				class="h-full w-full object-cover opacity-50 transition-transform duration-300 hover:scale-105"
			/>
		</div>
		<div
			class="relative flex h-full flex-col justify-end bg-card/40 p-6 transition-colors hover:bg-card/50"
		>
			<h3 class="mb-2 text-2xl font-bold text-foreground">{service.title}</h3>
			<p class="text-foreground/90">{service.shortDesc}</p>
		</div>
	</div>
</div>
