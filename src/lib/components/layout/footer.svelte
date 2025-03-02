<script>
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';
</script>

<footer class={` bg-black py-8 text-white`}>
	<div class="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-4 max-w-screen-xl">
		<div class="space-y-4">
			<h4 class="font-semibold text-lg">Contact Us</h4>
			<!-- TODO (Narasimha) : Change mail id and phone number -->
			<p>Email: unique.event.productions2020@gmail.com</p>
			<p>Phone: +91 99026 64066</p>
		</div>

		<div class="space-y-4">
			<h4 class="font-semibold text-lg">Follow Us</h4>
			<div class="flex space-x-4">
				<a
					href="/"
					class="p-2 border border-gray-400 rounded-full hover:text-gray-400"
					aria-label="Facebook"><Facebook /></a
				>
				<a
					href="https://www.instagram.com/unique_event_productions?igsh=MWs2eWR5dnJhbzJmMA=="
					class="p-2 border border-gray-400 rounded-full hover:text-gray-400"
					aria-label="Instagram"><Instagram /></a
				>
			</div>
		</div>

		<div class="space-y-4">
			<h4 class="font-semibold text-lg">Quick Links</h4>
			<nav class="space-y-2">
				<a href="/" class="block hover:text-gray-400">Home</a>
				<a href="/about-us" class="block hover:text-gray-400">About</a>
				<a href="/services" class="block hover:text-gray-400">Services</a>
				<a href="/contact-us" class="block hover:text-gray-400">Contact</a>
			</nav>
		</div>
	</div>

	<div class="mt-8 pt-6 border-gray-600 border-t text-center">
		<p>&copy; {new Date().getFullYear()} Unique Event Productions. All rights reserved.</p>
	</div>
</footer>
