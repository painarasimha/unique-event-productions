<script lang="ts">
	export let imageUrl: string;
	export let category: string;
</script>

<div class="group relative mb-6 break-inside-avoid overflow-hidden rounded-lg">
	<img
		src={imageUrl}
		alt={category}
		class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
	/>
	<span
		class="absolute bottom-3 left-3 rounded-sm bg-black/70 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	>
		{category}
	</span>
</div>
