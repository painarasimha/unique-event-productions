<script lang="ts">
	import WorkCard from './work-card.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';
	import type { WorkItem } from '$lib/types/our-work.ts';

	export let items: WorkItem[];

	let selectedCategory: string | undefined = 'All';

	$: categories = ['All', ...new Set(items.map((item) => item.category))];

	$: filteredItems =
		selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory);
</script>

<div class="mx-auto max-w-6xl px-4">
	<!-- Mobile filter -->
	<div class="mb-10 w-full max-w-[220px] md:hidden">
		<select
			bind:value={selectedCategory}
			class="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground"
		>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<!-- Desktop filter -->
	<div class="mb-10 hidden justify-end gap-8 md:flex">
		{#each categories as category}
			<button
				type="button"
				aria-pressed={selectedCategory === category}
				class="relative pb-1 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 {selectedCategory ===
				category
					? 'text-foreground after:w-full'
					: 'text-muted-foreground after:w-0 hover:text-foreground'}"
				on:click={() => (selectedCategory = category)}
			>
				{category}
			</button>
		{/each}
	</div>

	<!-- Masonry grid -->
	<RevealSection class="columns-1 gap-6 sm:columns-2 lg:columns-3">
		{#each filteredItems as item (item.id)}
			<WorkCard {...item} />
		{/each}
	</RevealSection>
</div>
