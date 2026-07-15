<script lang="ts">
	import ServiceGrid from '$lib/components/services/service-grid.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';

	const services = [
		{
			id: 1,
			title: 'Wedding Planner',
			shortDesc: 'From saat pheras to grand celebrations—crafted with culture, love, and perfection',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/wedding2.jpg'
		},
		{
			id: 2,
			title: 'Concerts & Live Shows',
			shortDesc: 'Beyond the beats, beyond the lights—where energy meets execution',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert1.jpg'
		},
		{
			id: 3,
			title: 'Corporate Events',
			shortDesc: 'Boardrooms to ballrooms, we script experiences that mean business',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740914184/unique-event-productions/coporate1.avif'
		},
		{
			id: 4,
			title: 'Exhibition & Trade Shows',
			shortDesc: 'Your brand, center stage—designed to captivate, built to impress',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Exhibition3.jpg'
		},
		{
			id: 5,
			title: 'Social Parties',
			shortDesc: 'Ordinary gatherings? Not on our watch—expect the unexpected',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Party1.jpg'
		},
		{
			id: 6,
			title: 'Festival & Cultural Events',
			shortDesc: 'Tradition meets transformation—celebrations redefined',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740914903/unique-event-productions/festival1.jpg'
		}
	];
</script>

<div class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
	<h1 class="mb-16 text-center font-serif text-4xl sm:text-5xl">Services</h1>
	<RevealSection>
		<ServiceGrid {services} />
	</RevealSection>
</div>
