<script lang="ts">
	import { cn } from '$lib/utils.ts';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export const icon: HTMLElement | undefined = undefined;
	let tiltRef: HTMLDivElement;

	function handleMouseMove(e: MouseEvent) {
		if (!tiltRef) return;

		const rect = tiltRef.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = (y - centerY) / 20;
		const rotateY = (centerX - x) / 20;

		tiltRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	}

	function handleMouseLeave() {
		if (!tiltRef) return;
		tiltRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
	}
</script>

<div
	class={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border-2 border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-white/5 dark:shadow-none',
		className
	)}
	bind:this={tiltRef}
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	style="transition: transform 0.1s ease-out;"
	role="button"
	tabindex="0"
>
	<slot name="header" />
	<div class="transition duration-200 group-hover/bento:translate-x-2">
		<slot name="icon" />
		<div class="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
			{title}
		</div>
		<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
			{description}
		</div>
	</div>
</div>
