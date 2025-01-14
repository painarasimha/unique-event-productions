<script lang="ts">
	import { onMount } from 'svelte';
	let mouseX = 0,
		mouseY = 0;
	let xp = 0,
		yp = 0;
	let xpDot = 0,
		ypDot = 0;

	// Update mouse coordinates on movement
	const handleMouseMove = (e: MouseEvent) => {
		mouseX = e.pageX;
		mouseY = e.pageY;
	};

	// Smoothly move the cursor follower
	const updateFollowerPosition = () => {
		xp += (mouseX - xp) / 15;
		yp += (mouseY - yp) / 15;

		xpDot += (mouseX - xpDot) / 25;
		ypDot += (mouseY - ypDot) / 25;

		requestAnimationFrame(updateFollowerPosition);
	};

	// Start animations when the component is mounted
	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		updateFollowerPosition();

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<span
	class="cursorFollower invisible z-[999] rounded-full bg-primary lg:visible"
	style="left: {xp}px; top: {yp}px;"
></span>

<style>
	.cursorFollower {
		position: fixed;
		width: 1.5rem;
		height: 1.5rem;
		transform: translate(-50%, -50%);
		transition: transform 0.3s;
		pointer-events: none;
	}
</style>
