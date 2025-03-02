<script lang="ts">
	import CardBody from '../ui/ThreeDCardEffect/CardBody.svelte';
	import CardContainer from '../ui/ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '../ui/ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = false;
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
	className="shadow-lg rounded-lg w-full h-full overflow-hidden transition-transform duration-300 transform"
	>
	<CardBody className="relative w-full h-full">
		<CardItem class="absolute inset-0 bg-black" {isMouseEntered}>
			<img
			src={service.imageUrl}
			alt={service.title}
			class="opacity-50 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
			/>
		</CardItem>
		<CardItem
			{isMouseEntered}
			class="relative flex flex-col justify-end bg-card/40 hover:bg-card/50 p-6 h-full transition-colors"
		>
		<h3 class="mb-1 font-bold text-foreground text-2xl">{service.title}</h3>
		<p class="text-foreground/90">{service.shortDesc}</p>
	</CardItem>
</CardBody>
</CardContainer>
</div>
