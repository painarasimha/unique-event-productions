<script lang="ts">
	import OurWork from '$lib/components/our-work/our-work.svelte';
	import type { WorkItem } from '$lib/types/our-work.ts';

	const workItems: WorkItem[] = [
		{
			id: '1',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907198/unique-event-productions/wedding1.jpg',
			category: 'Wedding'
		},
		{
			id: '2',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1737994994/unique-event-productions/banner-img6.jpg',
			category: 'Party'
		},
		{
			id: '3',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907753/unique-event-productions/Wedding4.jpg',
			category: 'Wedding'
		},
		{
			id: '4',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1737995006/unique-event-productions/banner-img7.jpg',
			category: 'Party'
		},
		{
			id: '5',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907753/unique-event-productions/Wedding5.jpg',
			category: 'Wedding'
		},
		{
			id: '6',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1737995030/unique-event-productions/banner-img11.jpg',
			category: 'Party'
		},
		{
			id: '7',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907499/unique-event-productions/temple1.jpg',
			category: 'Cultural'
		},
		{
			id: '8',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907499/unique-event-productions/Exhibition1.jpg',
			category: 'Exhibition'
		},
		{
			id: '9',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Party2.jpg',
			category: 'Party'
		},
		{
			id: '10',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Exhibition3.jpg',
			category: 'Exhibition'
		},
		{
			id: '11',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/wedding2.jpg',
			category: 'Wedding'
		},
		{
			id: '12',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907753/unique-event-productions/Temple3.jpg',
			category: 'Cultural'
		},
		{
			id: '13',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert2.jpg',
			category: 'Concert'
		},
		{
			id: '14',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1737994815/unique-event-productions/banner-img5.jpg',
			category: 'Party'
		},
		{
			id: '15',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1737995008/unique-event-productions/banner-img8.jpg',
			category: 'Wedding'
		}
	];
</script>

<div class="mx-auto flex max-w-screen-2xl flex-col px-4 py-6 md:container">
	<h1 class="mx-auto mb-8 text-center font-serif text-2xl text-black md:text-5xl">Our Work</h1>
	<OurWork items={workItems} />
</div>
