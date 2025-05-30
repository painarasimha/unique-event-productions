<script lang="ts">
	import { onMount } from 'svelte';
	import { Phone, Mail, MapPin } from 'lucide-svelte';

	import ContactCard from '$lib/components/contact-us/contact-card.svelte';
	import Timings from '$lib/components/contact-us/timings.svelte';
	import FAQSection from '$lib/components/contact-us/faq-section.svelte';

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

<div class="container mx-auto px-6 py-6 md:px-8 md:py-12">
	<h1
		class="mb-5 text-center font-serif text-2xl font-semibold text-primary md:mb-10 md:text-5xl md:font-bold"
	>
		Contact Us
	</h1>
	<div class="mb-5 grid grid-cols-1 gap-4 sm:mb-12 sm:gap-6 md:grid-cols-3">
		{#each contactInfo as info}
			<ContactCard {info} />
		{/each}
	</div>

	<!-- Contact Form -->
	<form
		on:submit|preventDefault={handleSubmit}
		class="mx-auto my-8 max-w-2xl space-y-4 rounded-xl border-2 bg-gray-700/10 p-6 shadow-inner shadow-gray-500/20 md:p-8"
	>
		<h2 class="text-center text-xl font-semibold md:text-2xl">Send Us a Message</h2>

		<div class="flex flex-col space-y-2">
			<label for="name" class="font-medium">Your Name</label>
			<input bind:value={form.name} id="name" type="text" required class="rounded-md border p-2" />
		</div>

		<div class="flex flex-col space-y-2">
			<label for="email" class="font-medium">Your Email</label>
			<input
				bind:value={form.email}
				id="email"
				type="email"
				required
				class="rounded-md border p-2"
			/>
		</div>

		<div class="flex flex-col space-y-2">
			<label for="message" class="font-medium">Message</label>
			<textarea
				bind:value={form.message}
				id="message"
				required
				rows="5"
				class="rounded-md border p-2"
			></textarea>
		</div>

		<button
			type="submit"
			class="rounded-md bg-primary px-6 py-2 font-semibold text-white hover:bg-opacity-90"
		>
			Send Message
		</button>

		{#if status}
			<p class="mt-2 text-center text-sm text-green-600">{status}</p>
		{/if}
	</form>

	<FAQSection />
</div>
