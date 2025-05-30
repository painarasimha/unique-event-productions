<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Approach from '$lib/components/about/approach.svelte';
	import Chooseus from '$lib/components/about/chooseus.svelte';
</script>

<div class="min-h-screen w-full bg-gray-100">
	<!-- Hero Section -->
	<section class="relative text-foreground" in:fade={{ duration: 800 }}>
		<div class="container mx-auto px-4 py-8 md:px-14 md:py-14">
			<h1
				class="mx-auto mb-5 text-center font-serif text-2xl md:text-4xl"
				in:fly={{ y: -20, duration: 600 }}
			>
				Who We Are
			</h1>
			<div
				class="mx-auto max-w-4xl text-justify font-sans text-sm md:text-xl"
				in:fade={{ delay: 200, duration: 800 }}
			>
				<p class="mb-8">
					At Unique Event Productions, we transform dreams into unforgettable experiences with
					creativity, precision, and expertise. Based in Mangaluru, we serve clients locally and
					globally, delivering extraordinary celebrations—from elegant weddings and grand corporate
					galas to intimate parties and impactful non-profit events. Our full-service event
					management covers every detail, including venue selection, décor design, entertainment,
					and seamless coordination, ensuring your vision comes to life effortlessly.
				</p>
				<p class="mb-8">
					Driven by a passion for storytelling, we craft events that are as meaningful as they are
					visually stunning. Combining innovative solutions with a client-first philosophy, our
					talented team collaborates with you to create personalized, memorable experiences. Choose
					Unique Event Productions to make every moment as extraordinary as you.
				</p>
			</div>
		</div>
	</section>

	<!-- Approach Section -->
	<div in:fly={{ y: 200, duration: 1000 }} class="flex justify-center">
		<Approach />
	</div>

	<!-- Choose Us Section -->
	<div in:fly={{ y: 200, duration: 1000 }} class="flex justify-center">
		<Chooseus />
	</div>

	<!-- Closing Paragraph -->
	<div
		class="mb-2 flex justify-center px-4 pb-2 text-justify md:px-8 md:py-6"
		in:fade={{ duration: 800 }}
	>
		<p class="max-w-4xl font-sans text-sm md:text-xl" in:fly={{ x: -20, duration: 600 }}>
			Let Unique Event Productions be your partner in creating moments that last a lifetime. Contact
			us to begin planning your next exceptional event.
		</p>
	</div>
</div>
