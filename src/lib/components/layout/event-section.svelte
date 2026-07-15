<script>
	import { goto } from '$app/navigation';
	import Button from '../ui/button/button.svelte';
	import RevealSection from '../ui/reveal-section.svelte';

	const offerImg =
		'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert1.jpg';
	const workImg =
		'https://res.cloudinary.com/db56favi8/image/upload/v1740907753/unique-event-productions/Wedding4.jpg';
</script>

<section class="w-full bg-background py-20 sm:py-28">
	<RevealSection class="mx-auto grid w-[90%] max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
		<div>
			<h2 class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
				Our Promise to You
			</h2>
			<p class="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
				We craft unforgettable celebrations.
			</p>
		</div>
		<div class="flex flex-col gap-6">
			<p class="text-base leading-relaxed sm:text-lg">
				At Unique Event Productions, every event begins with your story. We specialize in
				<span class="font-medium text-accent">luxury event planning</span>, ensuring each
				celebration is a seamless blend of elegance, creativity, and personal touch.
			</p>
			<p class="text-base leading-relaxed sm:text-lg">
				<span class="font-medium text-accent">Our approach</span> is built on partnership and precision.
				We take the time to understand who you are, what you envision, and the moments that matter
				most to you. This deep connection allows us to design weddings, corporate events, social gatherings,
				and private parties that are not just visually stunning but also deeply meaningful.
			</p>
			<p class="text-base leading-relaxed sm:text-lg">
				At <span class="font-medium text-accent">Unique Event Productions</span>, we don't just create
				events—we craft experiences that leave lasting impressions. Let's bring your vision to life!
			</p>
			<div class="mt-2">
				<Button
					variant="outline"
					class="rounded-sm border-foreground/30 px-6 py-5 text-sm text-foreground hover:bg-foreground hover:text-background"
					on:click={() => goto('/about-us')}
				>
					Discover Who We Are
				</Button>
			</div>
		</div>
	</RevealSection>

	<RevealSection class="mx-auto mt-20 grid w-[90%] max-w-6xl gap-6 sm:mt-28 md:grid-cols-2">
		<a
			href="/services"
			class="group relative flex h-80 flex-col justify-end overflow-hidden rounded-sm p-8"
		>
			<img
				src={offerImg}
				alt="What we offer"
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
			<div class="relative z-10 text-white">
				<h3 class="text-sm font-medium uppercase tracking-wide text-white/70">What We Offer</h3>
				<p class="mt-2 font-serif text-2xl sm:text-3xl">Let us dazzle and inspire you.</p>
			</div>
		</a>

		<a
			href="/our-work"
			class="group relative flex h-80 flex-col justify-end overflow-hidden rounded-sm p-8"
		>
			<img
				src={workImg}
				alt="Our work"
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
			<div class="relative z-10 text-white">
				<h3 class="text-sm font-medium uppercase tracking-wide text-white/70">Our Work</h3>
				<p class="mt-2 font-serif text-2xl sm:text-3xl">
					Events we have conducted and made memorable.
				</p>
			</div>
		</a>
	</RevealSection>
</section>
