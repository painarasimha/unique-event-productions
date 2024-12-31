<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.ts';

	interface FAQItem {
		question: string;
		answer: string;
	}

	const faqs: FAQItem[] = [
		{
			question: 'Do you handle international events?',
			answer: 'Yes, we organize events worldwide with our network of global partners.'
		},
		{
			question: "What's your typical event planning timeline?",
			answer: 'We recommend 3-6 months for medium events and 6-12 months for large events.'
		},
		{
			question: "What's your cancellation policy?",
			answer: 'Full refund if cancelled 30 days before the event, 50% refund within 15-29 days.'
		},
		{
			question: 'Do you provide vendor recommendations?',
			answer: 'Yes, we have a curated list of trusted vendors for all event needs.'
		}
	];
</script>

<div
	class="mx-auto w-full max-w-3xl rounded-xl border-2 bg-gray-700/10 px-4 py-10 shadow-inner shadow-gray-500/20 md:px-8"
>
	<h2 class="mb-4 text-center text-lg font-medium md:mb-8 md:text-2xl md:font-bold">
		Frequently Asked Questions
	</h2>
	<Accordion.Root>
		{#each faqs as faq, i}
			<Accordion.Item value={`item-${i}`} class="text-sm md:text-lg">
				<Accordion.Trigger class="py-3 md:py-5">{faq.question}</Accordion.Trigger>
				<Accordion.Content class="px-4 py-3 text-start text-foreground md:py-5">{faq.answer}</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
