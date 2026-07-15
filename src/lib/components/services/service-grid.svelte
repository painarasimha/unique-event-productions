<script lang="ts">
	import ServiceCard from './service-card.svelte';

	export let services: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
	}[];
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each services as service (service.id)}
		<ServiceCard {service} />
	{/each}
</div>
