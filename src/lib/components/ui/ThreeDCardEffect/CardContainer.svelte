<script lang="ts">
	import { cn } from '$lib/utils.ts';

	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;
	export let isMouseEntered = false;

	let containerRef: HTMLDivElement;

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef) return;
		const { left, top, width, height } = containerRef.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = () => {
		isMouseEntered = true;
		if (!containerRef) return;
	};

	const handleMouseLeave = () => {
		if (!containerRef) return;
		isMouseEntered = false;
		containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};
</script>

<div class={cn('flex items-center justify-center', containerClassName)} style="perspective: 500px;">
	<div
		bind:this={containerRef}
		on:mouseenter={handleMouseEnter}
		on:mousemove={handleMouseMove}
		on:mouseleave={handleMouseLeave}
		role="button"
		tabindex="0"
		class={cn(
			'relative flex items-center justify-center transition-all duration-200 ease-linear',
			className
		)}
		style="transform-style: preserve-3d;"
	>
		<slot />
	</div>
</div>
