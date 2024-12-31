<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.ts';
</script>

<section class="mx-auto py-5 md:py-8">
	<div class="container mx-auto px-10">
		<h2 class="p-3 mb-2 text-center text-2xl font-medium font-sans md:font-bold md:text-4xl md:p-5 md:mb-4">Why Choose Us?</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each ["Local expertise with a decade of experience in Udupi and Mangalore's event landscape", 'End-to-end event management, from conceptualization to execution', 'Personalized attention to detail, ensuring your vision comes to life', 'Strong network of trusted vendors and venues across the coastal region'] as item, index}
				<Card.Root class="transition-shadow bg-gray-700/10 border-2 shadow-inner shadow-gray-500/20 hover:shadow-lg">
					<Card.Content class="p-5">
						<p class="text-card-foreground font-sans text-sm text-center md:text-xl">{item}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
