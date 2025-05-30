<script>
	import { goto } from '$app/navigation';
	import Button from '../ui/button/button.svelte';
</script>

<section class="flex w-full flex-col items-center bg-gray-100 py-6 sm:py-10">
	<div class="flex w-[90%] flex-col items-center space-y-6 text-center lg:max-w-3xl">
		<!-- Original Section -->
		<h2 class="sm:text-md text-sm font-medium uppercase tracking-wide text-muted-foreground">
			Our Promise to You
		</h2>
		<h1 class="font-serif text-2xl sm:text-3xl md:text-4xl">
			WE CRAFT<br /> UNFORGETTABLE <br />CELEBRATIONS
		</h1>
		<div class="h-12 w-[0.5px] rounded-full bg-black/50 sm:h-16"></div>
		<p class="text-base sm:text-lg">
			At Unique Event Productions, every event begins with your story. We specialize in <span
				class="font-semibold text-accent">luxury event planning</span
			>, ensuring each celebration is a seamless blend of elegance, creativity, and personal touch.
		</p>
		<p class="text-base sm:text-lg">
			<span class="font-semibold text-accent">Our approach</span> is built on partnership and precision.
			We take the time to understand who you are, what you envision, and the moments that matter most
			to you. This deep connection allows us to design weddings, corporate events, social gatherings,
			and private parties that are not just visually stunning but also deeply meaningful.
		</p>
		<p class="text-base sm:text-lg">
			At <span class="font-semibold text-accent">Unique Event Productions</span>, we don't just
			create events—we craft experiences that leave lasting impressions. Let's bring your vision to
			life!
		</p>

		<!-- Button Section -->
		<div class="mt-4 sm:mt-6">
			<Button
				variant="outline"
				size="lg"
				class="rounded-lg border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-background sm:px-6 sm:py-3 sm:text-base"
				on:click={() => goto('/about-us')}
			>
				Discover Who We Are
			</Button>
		</div>
	</div>

	<!-- 'What We Offer' Section -->
	<div class="my-8 w-[90%] lg:flex lg:w-[80%]">
		<div
			class="flex flex-col items-start gap-4 border-b-2 border-t-2 py-8 text-left lg:w-[50%] lg:items-center lg:justify-between lg:px-4 lg:text-center"
		>
			<h2 class="sm:text-md text-sm font-medium uppercase tracking-wide text-muted-foreground">
				What We Offer
			</h2>
			<h1 class="font-serif text-2xl sm:text-3xl md:text-4xl">Let us dazzle and inspire you.</h1>
			<Button
				variant="outline"
				size="lg"
				class="rounded-lg border border-foreground px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background sm:px-6 sm:py-3 sm:text-base"
				on:click={() => goto('/services')}
			>
				What We Offer
			</Button>
		</div>

		<!-- TODO 'Our Work' Section -->
		<div
			class="flex flex-col items-end gap-4 border-b-2 py-8 text-right lg:h-full lg:w-[50%] lg:items-center lg:justify-between lg:border-l-2 lg:border-t-2 lg:px-4 lg:text-center"
		>
			<h2 class="sm:text-md text-sm font-medium uppercase tracking-wide text-muted-foreground">
				Our Work
			</h2>
			<h1 class="font-serif text-2xl sm:text-3xl md:text-4xl">
				Events we have conducted and made memorable.
			</h1>
			<Button
				variant="outline"
				size="lg"
				class="rounded-lg border border-foreground px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background sm:px-6 sm:py-3 sm:text-base"
				on:click={() => goto('/our-work')}
			>
				Our Work
			</Button>
		</div>
	</div>
</section>
