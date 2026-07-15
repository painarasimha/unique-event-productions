<script lang="ts">
	import Approach from '$lib/components/about/approach.svelte';
	import Chooseus from '$lib/components/about/chooseus.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';
</script>

<div class="w-full bg-background">
	<section class="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
		<h1 class="font-serif text-4xl sm:text-5xl">Who We Are</h1>
		<div
			class="mx-auto mt-8 max-w-2xl space-y-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg"
		>
			<p>
				At Unique Event Productions, we transform dreams into unforgettable experiences with
				creativity, precision, and expertise. Based in Mangaluru, we serve clients locally and
				globally, delivering extraordinary celebrations—from elegant weddings and grand corporate
				galas to intimate parties and impactful non-profit events. Our full-service event management
				covers every detail, including venue selection, décor design, entertainment, and seamless
				coordination, ensuring your vision comes to life effortlessly.
			</p>
			<p>
				Driven by a passion for storytelling, we craft events that are as meaningful as they are
				visually stunning. Combining innovative solutions with a client-first philosophy, our
				talented team collaborates with you to create personalized, memorable experiences. Choose
				Unique Event Productions to make every moment as extraordinary as you.
			</p>
		</div>
	</section>

	<RevealSection>
		<Approach />
	</RevealSection>

	<RevealSection>
		<Chooseus />
	</RevealSection>

	<section class="mx-auto max-w-2xl px-4 py-20 text-center sm:py-28">
		<p class="text-base leading-relaxed text-muted-foreground sm:text-lg">
			Let Unique Event Productions be your partner in creating moments that last a lifetime. Contact
			us to begin planning your next exceptional event.
		</p>
	</section>
</div>
