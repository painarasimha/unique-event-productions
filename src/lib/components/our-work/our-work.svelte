<script lang="ts">
	import WorkCard from './work-card.svelte';
	import type { WorkItem } from '$lib/types/our-work.ts';
  import Button from '../ui/button/button.svelte';

	export let items: WorkItem[];
	export let selectedCategory: string = 'All';

	$: filteredItems =
		selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory);

	$: categories = ['All', ...new Set(items.map((item) => item.category))];
</script>

<div class="container mx-auto px-4 py-8">
	<div class="flex flex-wrap gap-2 mb-8">
		{#each categories as category}
			<Button
      variant={selectedCategory === category ? "outline" : "ghost"}
      on:click={() => selectedCategory = category}
      class="bg-background/30 hover:bg-secondary/10 text-foreground"
      >
				{category}
  </Button>
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredItems as item}
			<WorkCard {...item} />
		{/each}
	</div>
</div>
