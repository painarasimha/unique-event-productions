<script lang="ts">
	import ServiceCard from './serviceCard.svelte';

	export let services: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
		link: string;
	}[];
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:hidden lg:grid-cols-3 xl:grid-cols-4">
	{#each services as service (service.id)}
		<ServiceCard {service} />
	{/each}
</div>
