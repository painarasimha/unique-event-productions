<script>
	import ServiceCard from '$lib/components/serviceCard.svelte';
  const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

	const services = [
		{
			title: 'Wedding Planner',
			description: 'Strategic consulting services for business growth',
			imageUrl: ``

		},
		{
			title: 'Concerts & Live Shows',
			description: 'Digital transformation solutions',
			imageUrl: ``
		},
		{
			title: 'Corporate Events',
			description: 'Custom software development',
			imageUrl: ``
		},
		{
			title: 'Exhibition & Trade Shows',
			description: 'Cloud infrastructure management',
			imageUrl: ``
		},
		{
			title: 'Social Parties',
			description: 'Data analytics and insights',
			imageUrl: ``
		},
    {
			title: 'Festival & Cultural Events',
			description: 'Data analytics and insights',
			imageUrl: ``
		}
	];
</script>

<div class='container mx-auto px-4 py-6'>
  <div class="grid grid-cols-12 grid-rows-6 gap-4 ">
    
    <!-- Wedding Planner -->
    <div class="col-span-8 col-start-2 col-end-10 md:col-span-8 md:row-span-2">
      <ServiceCard {...services[0]} />
    </div>
    
    <!-- Concert & Live Shows -->
    <div class="col-span-8 col-start-2 col-end-10 md:col-span-4 md:row-span-4">
      <ServiceCard {...services[1]} />
    </div>
    
    <!-- Corporate Events -->
    <div class="col-span-8 col-start-2 col-end-10 md:col-span-4 md:row-span-2">
      <ServiceCard {...services[2]} />
    </div>
    
    <!-- Exhibition & Trade Shows -->
    <div class="col-span-8 col-start-2 col-end-10 md:col-span-4 md:row-span-2">
      <ServiceCard {...services[3]} />
    </div>
    
    <!-- Social Parties -->
    <div class="col-span-8 col-start-2 col-end-10 md:col-span-6 md:row-span-2">
      <ServiceCard {...services[4]} />
    </div>
    
    <!-- Festivals & Cultural Events -->
    <div class="col-span-8 col-start-2 col-end-10 md:col-span-6 md:row-span-2">
      <ServiceCard {...services[5]} />
    </div>
  </div>
</div>
