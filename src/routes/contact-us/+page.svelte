<script lang="ts">
	import { Phone, Mail, MapPin } from 'lucide-svelte';

	import ContactCard from '$lib/components/contact-us/contact-card.svelte';
	import Timings from '$lib/components/contact-us/timings.svelte';
	import FAQSection from '$lib/components/contact-us/faq-section.svelte';

	const contactInfo = [
		// TODO Update the information
		{
			icon: Phone,
			name: 'Phone',
			details: ['+91 99026 64066']
		},
		{
			icon: Mail,
			name: 'Email',
			details: ['unique.event.productions2020@gmail.com']
		},
		{
			icon: MapPin,
			name: 'Location',
			details: ['Nr Marpalli Railway Bridge, Kukkikatte, Udupi, 576101']
		}
	];
</script>

<div class="mx-auto px-6 md:px-8 py-6 md:py-12 container">
	<h1 class="mb-5 md:mb-10 font-serif font-semibold md:font-bold text-primary text-2xl md:text-5xl text-center">Contact Us</h1>
	<div class="gap-4 sm:gap-6 grid grid-cols-1 md:grid-cols-3 mb-5 sm:mb-12">
		{#each contactInfo as info}
			<ContactCard {info} />
		{/each}
	</div>

  <div class="mx-auto mb-8 sm:mb-16 md:w-1/2">
    <Timings />
  </div>

  <FAQSection />
  
</div>
