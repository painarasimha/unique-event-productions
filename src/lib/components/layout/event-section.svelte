<script>
	import { goto } from '$app/navigation';
	import Button from '../ui/button/button.svelte';
</script>

<section class="flex w-full flex-col items-center bg-gray-100 py-10">
	<div class="flex max-w-3xl flex-col items-center space-y-6 text-center">
		<!-- Original Section -->
		<h2 class="text-md font-medium uppercase tracking-wide text-muted-foreground">
			Our Promise to You
		</h2>
		<h1 class="font-serif text-4xl md:text-4xl">WE CRAFT<br /> UNFORGETTABLE <br />CELEBRATIONS</h1>
		<div class="h-16 w-[0.5px] rounded-full bg-black/50 text-center"></div>
		<p class="text-lg">
			At Rafanelli Events, every <span class="font-semibold text-accent">celebration</span>
			begins with your story. We expertly weave your narrative throughout every detail of your event,
			creating an atmosphere that is both extraordinary and deeply personal.
		</p>
		<p class="text-lg">
			<span class="font-semibold text-accent">Our approach</span> is one of partnership and precision.
			We listen intently to capture the essence of who you are, what you aspire to be, and what matters
			most to you. This understanding allows us to tailor every element, ensuring no detail is overlooked
			and every possibility explored.
		</p>
		<p class="text-lg">
			Events at Rafanelli are not just beautiful; they are smart, strategically crafted to reflect
			you.
		</p>

		<!-- Button Section -->
		<div class="mt-6">
			<Button
				variant="outline"
				size="lg"
				class="rounded-lg border border-accent px-6 py-2 text-accent transition-colors hover:bg-accent hover:text-background"
				on:click={() => goto('/about-us')}
			>
				Discover Who We Are
			</Button>
		</div>
	</div>

	<!-- 'What We Offer' Section -->
	<div class="my-32 flex w-[80%] flex-col gap-4">
		<h2 class="text-md font-medium uppercase tracking-wide text-muted-foreground">What We Offer</h2>
		<div class="flex justify-between gap-12">
			<h1 class="font-serif text-3xl md:text-4xl">Let us dazzle and inspire you.</h1>
			<Button
				variant="outline"
				size="lg"
				class="rounded-lg border border-foreground px-6 py-2 text-foreground transition-colors hover:bg-foreground hover:text-background"
				on:click={() => goto('/services')}
			>
				What We Offer
			</Button>
		</div>
	</div>

	<!-- TODO 'Our Work' Section -->
	<!-- <div class="my-16 flex w-[80%] flex-col gap-4">
		<h2 class="text-md text-right font-medium uppercase tracking-wide text-muted-foreground">
			Our Work
		</h2>
		<div class="flex flex-row-reverse justify-between gap-12">
			<h1 class="font-serif text-3xl md:text-4xl">Events we have conducted and made memorable.</h1>
			<Button
				variant="outline"
				size="lg"
				class="rounded-lg border border-foreground px-6 py-2 text-foreground transition-colors hover:bg-foreground hover:text-background"
				on:click={() => goto('/our-work')}
			>
				Our Work
			</Button>
		</div>
	</div> -->
</section>
