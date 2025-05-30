<script lang="ts">

import { onMount } from 'svelte';
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

<div class="mx-auto px-6 md:px-8 py-6 md:py-12 container">
	<h1 class="mb-5 md:mb-10 font-serif font-semibold md:font-bold text-primary text-2xl md:text-5xl text-center">Contact Us</h1>
	<div class="gap-4 sm:gap-6 grid grid-cols-1 md:grid-cols-3 mb-5 sm:mb-12">
		{#each contactInfo as info}
			<ContactCard {info} />
		{/each}
	</div>

  <!-- Contact Form -->
<form on:submit|preventDefault={handleSubmit} class="bg-gray-700/10 border-2 shadow-inner shadow-gray-500/20 rounded-xl p-6 md:p-8 max-w-2xl mx-auto my-8 space-y-4">
	<h2 class="text-xl md:text-2xl font-semibold text-center">Send Us a Message</h2>

	<div class="flex flex-col space-y-2">
		<label for="name" class="font-medium">Your Name</label>
		<input bind:value={form.name} id="name" type="text" required class="p-2 border rounded-md" />
	</div>

	<div class="flex flex-col space-y-2">
		<label for="email" class="font-medium">Your Email</label>
		<input bind:value={form.email} id="email" type="email" required class="p-2 border rounded-md" />
	</div>

	<div class="flex flex-col space-y-2">
		<label for="message" class="font-medium">Message</label>
		<textarea bind:value={form.message} id="message" required rows="5" class="p-2 border rounded-md"></textarea>
	</div>

	<button type="submit" class="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90">
		Send Message
	</button>

	{#if status}
		<p class="text-center mt-2 text-sm text-green-600">{status}</p>
	{/if}
</form>



<FAQSection />
  
</div>
