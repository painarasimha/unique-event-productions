<script lang="ts">
	import BentoGridItem from '../ui/BentoGrid/BentoGridItem.svelte';
	import BentoGrid from '../ui/BentoGrid/BentoGrid.svelte';

	// Services array as prop from Parent component
	export let services: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
		link: string;
		className: string;
	}[];
</script>

<BentoGrid className="hidden md:grid md:auto-rows-[20rem] mx-auto max-w-5xl">
	{#each services as item}
		<BentoGridItem title={item.title} description={item.shortDesc} className={item.className}>
			<img
				src={item.imageUrl}
				alt={item.title}
				slot="header"
				class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-border border-transparent object-cover"
			/>
		</BentoGridItem>
	{/each}
</BentoGrid>
