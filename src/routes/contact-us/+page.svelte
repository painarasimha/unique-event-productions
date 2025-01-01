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
			details: ['+91 97415 58494']
		},
		{
			icon: Mail,
			name: 'Email',
			details: ['unique.event.productions2020@gmail.com']
		},
		{
			icon: MapPin,
			name: 'Location',
			details: ['123 Event Street', 'New York, NY 10001']
		}
	];
</script>

<div class="container mx-auto px-6 py-6 md:px-8 md:py-12">
	<h1 class="mb-5 text-center text-2xl font-semibold font-serif text-primary md:mb-10 md:font-bold md:text-5xl">Contact Us</h1>
	<div class="mb-5 grid grid-cols-1 gap-4 sm:mb-12 md:grid-cols-3 sm:gap-6 ">
		{#each contactInfo as info}
			<ContactCard {info} />
		{/each}
	</div>

  <div class="mx-auto mb-8 sm:mb-16 md:w-1/2">
    <Timings />
  </div>

  <FAQSection />
  
</div>
