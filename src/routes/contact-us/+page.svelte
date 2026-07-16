<script lang="ts">
	import { Phone, Mail, MapPin } from 'lucide-svelte';

	import ContactCard from '$lib/components/contact-us/contact-card.svelte';
	import Timings from '$lib/components/contact-us/timings.svelte';
	import FAQSection from '$lib/components/contact-us/faq-section.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';

	const contactInfo = [
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

<div class="mx-auto max-w-5xl px-4 py-20 sm:py-28">
	<h1 class="mb-16 text-center font-serif text-4xl sm:text-5xl">Contact Us</h1>

	<RevealSection>
		<div class="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each contactInfo as info}
				<ContactCard {info} />
			{/each}
			<Timings />
		</div>
	</RevealSection>

	<RevealSection>
		<FAQSection />
	</RevealSection>
</div>
