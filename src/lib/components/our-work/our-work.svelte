<script lang="ts">
	import WorkCard from './work-card.svelte';
	import type { WorkItem } from '$lib/types/our-work.ts';
	/* import Button from '../ui/button/button.svelte'; */
/* 	import * as Select from '$lib/components/ui/select/index.ts'; */
	import * as Tabs from '$lib/components/ui/tabs/index.ts';

	export let items: WorkItem[];
	
	let selectedCategory: string | undefined = 'All';

	// Get unique categories
	$: categories = ['All', ...new Set(items.map((item) => item.category))];

	// Filtered items based on selected category
	$: filteredItems =
		selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory);
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Mobile Layout-(Select Component) -->
	<div class="mb-8 w-full max-w-[250px] md:hidden">
		<select bind:value={selectedCategory} class="w-full px-3 py-2 border rounded-md bg-background text-foreground">
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<!-- Desktop Layout-(Tabs Component)-->
	<div class="hidden place-self-end md:block">
		<Tabs.Root
			value={selectedCategory}
			onValueChange={(value) => (selectedCategory = value)}
			class="w-full"
		>
			<Tabs.List class="mb-8 flex h-auto flex-wrap bg-background/30">
				{#each categories as category}
					<Tabs.Trigger value={category} class="data-[state=active]:bg-secondary/10">
						{category}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>
	</div>

	<!-- Grid Layout -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredItems as item}
			<WorkCard {...item} />
		{/each}
	</div>
</div>
