<script lang="ts">
	import CardBody from '../ui/ThreeDCardEffect/CardBody.svelte';
	import CardContainer from '../ui/ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '../ui/ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = false;
	import img3 from '$lib/assets/corporate.avif';
	import { onMount } from 'svelte';

	export let service: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
		link: string;
	};
</script>

<div class="w-full h-full"> <!-- Wrapper div for consistent sizing -->
	<CardContainer
	bind:isMouseEntered
	className="transform overflow-hidden h-full rounded-lg shadow-lg w-full transition-transform duration-300"
	>
	<CardBody className="relative h-full w-full">
		<CardItem class="absolute inset-0 bg-black" {isMouseEntered}>
			<img
			src={img3}
			alt={service.title}
			class="h-full w-full object-cover opacity-50 transition-transform duration-300 hover:scale-105"
			/>
		</CardItem>
		<CardItem
			{isMouseEntered}
			class="relative flex h-full flex-col justify-end bg-card/40 p-6 transition-colors hover:bg-card/50"
		>
		<h3 class="mb-2 text-2xl font-bold text-foreground">{service.title}</h3>
		<p class="text-foreground/90">{service.shortDesc}</p>
	</CardItem>
</CardBody>
</CardContainer>
</div>
