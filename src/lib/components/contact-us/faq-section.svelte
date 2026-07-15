<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.ts';

	interface FAQItem {
		question: string;
		answer: string;
	}

	const faqs: FAQItem[] = [
		{
			question: 'Do you offer end-to-end event management?',
			answer:
				'Absolutely! From venue selection, décor, and catering to artist bookings and logistics, we handle everything.'
		},
		{
			question: "What's your typical event planning timeline?",
			answer:
				'We recommend atleast 1 month in advance for small or medium events and 2-3 months for large events.'
		},
		{
			question: 'Do you provide vendor coordination?',
			answer:
				'Yes,  we have tie-ups with top photographers, caterers, decorators, and makeup artists to ensure seamless execution of all event needs.'
		},
		{
			question: 'How can I reach you for urgent queries?',
			answer: 'You can call or WhatsApp us at +91 99026 64066  or email us at'
		},
		{
			question: "What's your cancellation policy?",
			answer: 'Full refund if cancelled 30 days before the event, 50% refund within 15-29 days.'
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
				<Accordion.Content class="px-4 py-3 text-start text-foreground md:py-5"
					>{faq.answer}</Accordion.Content
				>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
