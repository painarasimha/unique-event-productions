<script>
	import Approach from '$lib/components/about/approach.svelte';
	import Chooseus from '$lib/components/about/chooseus.svelte';
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="relative bg-background text-foreground">
		<div class="container mx-auto px-10 py-10 md:py-14">
			<h1 class="mb-6 text-4xl font-bold md:text-6xl">About Us</h1>
			<p class="max-w-2xl text-lg md:text-xl">
				At Unique Event Productions, we transform ordinary occasions into extraordinary memories.
				Since our inception, we've been the driving force behind countless successful events across
				Udupi and Mangalore, bringing creativity and precision to every celebration we touch.
			</p>
		</div>
	</section>
	<Approach />
	<Chooseus />


	<div class="container mx-auto px-10 py-5 md:py-8">
		<p class="max-w-2xl text-lg md:text-xl">
			Let Unique Event Productions be your partner in creating moments that last a lifetime. Contact
			us to begin planning your next exceptional event.
		</p>
	</div>
</div>
