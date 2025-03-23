<script>
	import DesktopServiceGrid from '$lib/components/services/desktop-service-grid.svelte';
	import MobileServiceGrid from '$lib/components/services/mobile-service-grid.svelte';
	import ServiceCard from '$lib/components/services/serviceCard.svelte';
	const services = [
		//TODO Change all the details and information of each services
		//TODO Fix the Bento Grid Layout of the 2nd Box & use tilt js
		{
			id: 1,
			title: 'Wedding Planner',
			shortDesc: 'From saat pheras to grand celebrations—crafted with culture, love, and perfection',
			imageUrl: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/wedding2.jpg',
			link: '/service/1',
			className: 'col-span-2'
		},
		{
			id: 2,
			title: 'Concerts & Live Shows',
			shortDesc: 'Beyond the beats, beyond the lights—where energy meets execution',
			imageUrl: 'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert1.jpg',
			link: '/service/2',
			className: 'col-span-1 row-span-2'
		},
		{
			id: 3,
			title: 'Corporate Events',
			shortDesc: 'Boardrooms to ballrooms, we script experiences that mean business',
			imageUrl: 'https://res.cloudinary.com/db56favi8/image/upload/v1740914184/unique-event-productions/coporate1.avif',
			link: '/service/3',
			className: 'col-span-1'
		},
		{
			id: 4,
			title: 'Exhibition & Trade Shows',
			shortDesc: 'Your brand, center stage—designed to captivate, built to impress',
			imageUrl: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Exhibition3.jpg',
			link: '/service/4',
			className: 'col-span-1'
		},
		{
			id: 5,
			title: 'Social Parties',
			shortDesc: 'Ordinary gatherings? Not on our watch—expect the unexpected',
			imageUrl: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Party1.jpg',
			link: '/service/5',
			className: 'col-span-1'
		},
		{
			id: 6,
			title: 'Festival & Cultural Events',
			shortDesc: 'Tradition meets transformation—celebrations redefined',
			imageUrl: 'https://res.cloudinary.com/db56favi8/image/upload/v1740914903/unique-event-productions/festival1.jpg',
			link: '/service/6',
			className: 'col-span-2'
		}
	];
</script>

<div class="flex flex-col bg-gray-200/70 mx-auto py-6 border max-w-screen-xl w-full md:container">
	<h1 class="mx-auto mb-8 font-serif text-2xl md:text-5xl text-center">Services</h1>
	<MobileServiceGrid {services} />
	<DesktopServiceGrid {services} />
</div>
