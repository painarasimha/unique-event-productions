<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.ts';
</script>

<section class="py-12 md:py-16">
	<div class="container mx-auto px-10">
		<h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose Us</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each ["Local expertise with a decade of experience in Udupi and Mangalore's event landscape", 'End-to-end event management, from conceptualization to execution', 'Personalized attention to detail, ensuring your vision comes to life', 'Strong network of trusted vendors and venues across the coastal region'] as item, index}
				<Card.Root class="transition-shadow hover:shadow-lg">
					<Card.Content class="p-6">
						<p class="text-card-foreground">{item}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
