<script>
	import DesktopServiceGrid from '$lib/components/services/desktop-service-grid.svelte';
	import MobileServiceGrid from '$lib/components/services/mobile-service-grid.svelte';
	import ServiceCard from '$lib/components/services/serviceCard.svelte';
	const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
	const services = [
		//TODO Change all the details and information of each services
		//TODO Fix the Bento Grid Layout of the 2nd Box
		{
			id: 1,
			title: 'Wedding Planner',
			shortDesc: 'Strategic consulting services for business growth',
			imageUrl: ``,
			link: '/service/1'
		},
		{
			id: 2,
			title: 'Concerts & Live Shows',
			shortDesc: 'Digital transformation solutions',
			imageUrl: ``,
			link: '/service/2'
		},
		{
			id: 3,
			title: 'Corporate Events',
			shortDesc: 'Custom software development',
			imageUrl: ``,
			link: '/service/3'
		},
		{
			id: 4,
			title: 'Exhibition & Trade Shows',
			shortDesc: 'Cloud infrastructure management',
			imageUrl: ``,
			link: '/service/4'
		},
		{
			id: 5,
			title: 'Social Parties',
			shortDesc: 'Data analytics and insights',
			imageUrl: ``,
			link: '/service/5'
		},
		{
			id: 6,
			title: 'Festival & Cultural Events',
			shortDesc: 'Data analytics and insights',
			imageUrl: ``,
			link: '/service/6'
		}
	];
</script>

<div class="flex max-w-screen-2xl items-center mx-auto px-4 py-6 md:container">
	<MobileServiceGrid {services} />
	<DesktopServiceGrid {services} />
</div>
