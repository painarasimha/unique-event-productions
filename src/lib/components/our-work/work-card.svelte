<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.ts';

	export let imageUrl: string;
	export let category: string;
</script>

<Card.Root class="group overflow-hidden transition-all duration-300 hover:shadow-lg">
	<Card.Content class="p-0">
		<div class="relative">
			<img
				src={imageUrl}
				alt={category}
				class="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
			<div
				class="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<div class="p-4 text-center text-card-foreground">
					<span class="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm">
						{category}
					</span>
				</div>
			</div>
		</div>
	</Card.Content>
</Card.Root>
