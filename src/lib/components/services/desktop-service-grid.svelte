<script lang="ts">
	import BentoGridItem from '../ui/BentoGrid/BentoGridItem.svelte';
	import BentoGrid from '../ui/BentoGrid/BentoGrid.svelte';
	import img3 from '$lib/assets/corporate.avif';

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
				class="flex flex-1 border border-transparent border-border rounded-xl w-full h-full min-h-[6rem] object-cover"
			/>
		</BentoGridItem>
	{/each}
</BentoGrid>
