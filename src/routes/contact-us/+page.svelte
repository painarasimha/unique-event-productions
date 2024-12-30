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
			details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM']
		},
		{
			icon: Mail,
			name: 'Email',
			details: ['contact@eventpro.com', 'support@eventpro.com']
		},
		{
			icon: MapPin,
			name: 'Location',
			details: ['123 Event Street', 'New York, NY 10001']
		}
	];
</script>

<div class="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
	<h1 class="mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl lg:text-5xl">Contact Us</h1>
	<div class="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
		{#each contactInfo as info}
			<ContactCard {info} />
		{/each}
	</div>

  <div class="mb-8 sm:mb-12">
    <Timings />
  </div>

  <FAQSection />
  
</div>
