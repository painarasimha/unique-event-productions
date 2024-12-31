<script>
	import Approach from '$lib/components/about/approach.svelte';
	import Chooseus from '$lib/components/about/chooseus.svelte';
</script>

<div class="min-h-screen w-full">
	<!-- Hero Section -->
	<section class="relative bg-background text-foreground">
		<div class="container mx-auto px-8 py-8 md:px-14 md:py-14">
			<h1
				class="mx-auto mb-5 text-center font-serif text-2xl font-semibold text-primary md:text-5xl"
			>
				About Us
			</h1>
			<p class="mx-auto max-w-2xl text-justify font-sans text-sm md:text-xl">
				At <span class="font-semibold text-primary">Unique Event Productions</span>, we transform
				ordinary occasions into extraordinary memories. Since our inception, we've been the driving
				force behind countless successful events across Udupi and Mangalore, bringing creativity and
				precision to every celebration we touch.
			</p>
		</div>
	</section>
	<Approach />
	<Chooseus />

	<div class="container mx-auto mb-2 px-8 py-2 text-justify md:py-6">
		<p class="mx-auto max-w-2xl font-sans text-sm md:text-xl">
			Let Unique Event Productions be your partner in creating moments that last a lifetime. Contact
			us to begin planning your next exceptional event.
		</p>
	</div>
</div>
