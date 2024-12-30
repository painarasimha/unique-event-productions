<script lang="ts">
	import ServiceCard from './serviceCard.svelte';

	// Services array as prop from Parent component
	export let services: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
		link: string;
	}[];
</script>

<div class="container mx-auto px-4 py-6 hidden md:block">
	<div class="grid grid-cols-12 grid-rows-8 gap-3 items-stretch">
		<!-- Wedding Planner -->
		<div class="col-span-8 row-span-4">
			<ServiceCard service={services[0]} />
		</div>

		<!-- Concert & Live Shows -->
		<div class="col-span-4 row-span-6">
			<ServiceCard service={services[1]} />
		</div>

		<!-- Corporate Events -->
		<div class="col-span-4 row-span-2">
			<ServiceCard service={services[2]} />
		</div>

		<!-- Exhibition & Trade Shows -->
		<div class="col-span-4 row-span-2">
			<ServiceCard service={services[3]} />
		</div>

		<!-- Social Parties -->
		<div class="col-span-6 row-span-2">
			<ServiceCard service={services[4]} />
		</div>

		<!-- Festivals & Cultural Events -->
		<div class="col-span-6 row-span-2">
			<ServiceCard service={services[5]} />
		</div>
	</div>
</div>
