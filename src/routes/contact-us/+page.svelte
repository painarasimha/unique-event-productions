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

	let form = {
		name: '',
		email: '',
		message: ''
	};

	let status: string = '';

	async function handleSubmit() {
		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		});

		if (res.ok) {
			status = 'Your message has been sent!';
			form = { name: '', email: '', message: '' };
		} else {
			status = 'Something went wrong. Please try again later.';
		}
	}
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
		<form
			on:submit|preventDefault={handleSubmit}
			class="mx-auto mb-16 max-w-2xl space-y-4 rounded-sm border border-border p-6 md:p-8"
		>
			<h2 class="text-center font-serif text-2xl">Send Us a Message</h2>

			<div class="flex flex-col space-y-2">
				<label for="name" class="text-sm font-medium">Your Name</label>
				<input
					bind:value={form.name}
					id="name"
					type="text"
					required
					class="rounded-sm border border-border bg-background p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				/>
			</div>

			<div class="flex flex-col space-y-2">
				<label for="email" class="text-sm font-medium">Your Email</label>
				<input
					bind:value={form.email}
					id="email"
					type="email"
					required
					class="rounded-sm border border-border bg-background p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				/>
			</div>

			<div class="flex flex-col space-y-2">
				<label for="message" class="text-sm font-medium">Message</label>
				<textarea
					bind:value={form.message}
					id="message"
					required
					rows="5"
					class="rounded-sm border border-border bg-background p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				></textarea>
			</div>

			<button
				type="submit"
				class="rounded-sm bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Send Message
			</button>

			{#if status}
				<p class="mt-2 text-center text-sm text-green-700">{status}</p>
			{/if}
		</form>
	</RevealSection>

	<RevealSection>
		<FAQSection />
	</RevealSection>
</div>
