<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
</script>

<div class="overflow-hidden rounded-lg shadow-lg">
	<div class="relative h-full">
		<div class="absolute inset-0 bg-white">
			<img
				src={imageUrl}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
			/>
		</div>
    <div class="relative bg-card/40 hover:bg-card/50 transition-colors h-full p-6 flex flex-col justify-end">
      <h3 class="text-2xl font-bold text-foreground mb-2">{title}</h3>
      <p class="text-foreground/90">{description}</p>
    </div>
	</div>
</div>
