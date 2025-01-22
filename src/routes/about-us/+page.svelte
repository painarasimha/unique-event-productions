<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import Approach from '$lib/components/about/approach.svelte';
	import Chooseus from '$lib/components/about/chooseus.svelte';
</script>

<div class="min-h-screen w-full bg-gray-100">
	<!-- Hero Section -->
	<section class="relative text-foreground" in:fade={{ duration: 800 }}>
		<div class="container mx-auto px-8 py-8 md:px-14 md:py-14">
			<h1
				class="mx-auto mb-5 text-center font-serif text-2xl md:text-4xl"
				in:fly={{ y: -20, duration: 600 }}
			>
				Who We Are
			</h1>
			<div
				class="mx-auto max-w-4xl text-left font-sans text-sm md:text-xl"
				in:fade={{ delay: 200, duration: 800 }}
			>
				<p class="mb-8">
					Founded with a passion for creativity and a dedication to excellence, Unique Event
					Productions has established itself as a trusted leader in the event planning and event
					management industry. Headquartered in Mangaluru, we proudly extend our expertise to
					clients locally and globally, ensuring unforgettable experiences that bring your vision to
					life.
				</p>
				<p class="mb-8">
					At Unique Event Productions, we specialize in crafting exceptional events tailored to your
					unique needs. Whether you're searching for wedding planners near me, corporate event
					management, or expert party planners, our team transforms your ideas into reality with
					precision and flair. From intimate weddings to large-scale celebrations and impactful
					non-profit events, we deliver seamless event production that exceeds expectations.
				</p>
				<p class="mb-8">
					Our talented team of designers, event planners,and production experts works
					collaboratively to ensure every detail reflects your personal style and story. As a
					full-service event management company, we handle everything from venue selection and décor
					design to entertainment and flawless on-site coordination, offering the peace of mind you
					deserve.
				</p>
				<p class="mb-8">
					At the heart of Unique Event Productions is a dedication to creating events that are not
					only visually stunning but also deeply meaningful. Whether planning an elegant wedding, a
					grand corporate gala, or a lively party, we believe every celebration deserves to be as
					extraordinary as the people behind it. With a proven track record of success, a
					client-first philosophy, and innovative solutions, Unique Event Productions is your
					trusted partner for creating events that are truly unforgettable.
				</p>
			</div>
		</div>
	</section>

	<!-- Approach Section -->
	<div in:fly={{ y: 200, duration: 1000 }}>
		<Approach />
	</div>

	<!-- Choose Us Section -->
	<div in:fly={{ y: 200, duration: 1000 }}>
		<Chooseus />
	</div>

	<!-- Closing Paragraph -->
	<div class="container mx-auto mb-2 px-8 py-2 text-justify md:py-6" in:fade={{ duration: 800 }}>
		<p class="mx-auto max-w-4xl font-sans text-sm md:text-xl" in:fly={{ x: -20, duration: 600 }}>
			Let Unique Event Productions be your partner in creating moments that last a lifetime. Contact
			us to begin planning your next exceptional event.
		</p>
	</div>
</div>
