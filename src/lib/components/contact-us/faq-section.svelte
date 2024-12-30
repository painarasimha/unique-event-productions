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

<div class="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
	<h2 class="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">Frequently Asked Questions</h2>
  <Accordion.Root>
    {#each faqs as faq, i}
      <Accordion.Item value={`item-${i}`} class="text-sm sm:text-base">
        <Accordion.Trigger class="py-3 sm:py-4">{faq.question}</Accordion.Trigger>
        <Accordion.Trigger class="text-foreground">{faq.answer}</Accordion.Trigger>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</div>
