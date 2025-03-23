<script lang="ts">
	import CardBody from '../ui/ThreeDCardEffect/CardBody.svelte';
	import CardContainer from '../ui/ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '../ui/ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = false;

	export let service: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
		link: string;
	};
</script>

<a href={service.link} class="block w-full">
	<CardContainer
		bind:isMouseEntered
		className="w-full shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-[1.02]"
	>
		<CardBody className="relative w-full">
			<CardItem class="w-full h-52">
				<img
					src={service.imageUrl}
					alt={service.title}
					class="w-full h-full object-cover rounded-lg"
				/>
			</CardItem>

			<CardItem class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-black/20 p-4 text-white">
				<h3 class="text-lg font-bold">{service.title}</h3>
				<p class="text-sm">{service.shortDesc}</p>
			</CardItem>
		</CardBody>
	</CardContainer>
</a>
