<script lang="ts">
	import ServiceCard from "./serviceCard.svelte";

  export let services: {
    id: number,
    title: string,
    shortDesc: string,
    imageUrl: string,
    link: string
  }[];
</script>

<div class="grid grid-cols-1 gap-4 p-4 md:hidden">
  {#each services as service (service.id)}
      <ServiceCard service={service} />
  {/each}
</div>