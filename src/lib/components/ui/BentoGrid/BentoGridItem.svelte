<script lang="ts">
	import CardBody from '../ThreeDCardEffect/CardBody.svelte';
	import CardContainer from '../ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '../ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = false;
	import { cn } from '$lib/utils.ts';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export let icon: HTMLElement | undefined = undefined;
</script>

<CardContainer
	bind:isMouseEntered
	className={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border-2 border-transparent  p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-white/5 dark:shadow-none',
		className
	)}
>
	<CardItem {isMouseEntered} translateZ="20">
		<slot name="header" />
	</CardItem>
	<CardBody className="transition duration-200 group-hover/bento:translate-x-2">
		<slot name="icon" />
		<CardItem
			{isMouseEntered}
			translateZ="20"
			class="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200"
		>
			{title}
		</CardItem>
		<CardItem
			{isMouseEntered}
			translateZ="10"
			class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300"
		>
			{description}
		</CardItem>
	</CardBody>
</CardContainer>
