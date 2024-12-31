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

<div class="flex flex-col gap-8 md:hidden">
	{#each services as service (service.id)}
		<ServiceCard {service} />
	{/each}
</div>
