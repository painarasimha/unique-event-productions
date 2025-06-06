<script>
	// TODO Use error free icons
	import { Facebook, Instagram } from 'lucide-svelte';
</script>

<footer class={` bg-black py-8 text-white`}>
	<div
		class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 overflow-hidden px-4 sm:grid-cols-2 lg:grid-cols-3"
	>
		<div class="md:text-md text-sm md:space-y-4">
			<h4 class="text-lg font-semibold">Contact Us</h4>
			<p>Email: unique.event.productions2020@gmail.com</p>
			<p>Phone: +91 99026 64066</p>
		</div>

		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Follow Us</h4>
			<div class="flex space-x-4">
				<!-- TODO Add facebook URL -->
				<a
					href="/"
					class="rounded-full border border-gray-400 p-2 hover:text-gray-400"
					aria-label="Facebook"><Facebook /></a
				>
				<a
					href="https://www.instagram.com/unique_event_productions?igsh=MWs2eWR5dnJhbzJmMA=="
					class="rounded-full border border-gray-400 p-2 hover:text-gray-400"
					aria-label="Instagram"><Instagram /></a
				>
			</div>
		</div>

		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Quick Links</h4>
			<nav class="md:text-md space-y-2 text-sm">
				<a href="/" class="block hover:text-gray-400">Home</a>
				<a href="/about-us" class="block hover:text-gray-400">About</a>
				<a href="/services" class="block hover:text-gray-400">Services</a>
				<a href="/contact-us" class="block hover:text-gray-400">Contact</a>
			</nav>
		</div>
	</div>

	<div class="mt-8 border-t border-gray-600 pt-6 text-center">
		<p>&copy; {new Date().getFullYear()} Unique Event Productions. All rights reserved.</p>
	</div>
</footer>
