<script>
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';
</script>

<footer class={` bg-black py-8 text-white`}>
	<div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Contact Us</h4>
			<!-- TODO (Narasimha) : Change mail id and phone number -->
			<p>Email: info@uniqueeventproductions.com</p>
			<p>Phone: (123) 456-7890</p>
		</div>

		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Follow Us</h4>
			<div class="flex space-x-4">
				<a
					href="/"
					class="rounded-full border border-gray-400 p-2 hover:text-gray-400"
					aria-label="Facebook"><Facebook /></a
				>
				<a
					href="/"
					class="rounded-full border border-gray-400 p-2 hover:text-gray-400"
					aria-label="Instagram"><Instagram /></a
				>
				<a
					href="/"
					class="rounded-full border border-gray-400 p-2 hover:text-gray-400"
					aria-label="Twitter"><Twitter /></a
				>
			</div>
		</div>

		<div class="space-y-4">
			<h4 class="text-lg font-semibold">Quick Links</h4>
			<nav class="space-y-2">
				<a href="/" class="block hover:text-gray-400">Home</a>
				<a href="/about" class="block hover:text-gray-400">About</a>
				<a href="/services" class="block hover:text-gray-400">Services</a>
				<a href="/contact" class="block hover:text-gray-400">Contact</a>
			</nav>
		</div>
	</div>

	<div class="mt-8 border-t border-gray-600 pt-6 text-center">
		<p>&copy; {new Date().getFullYear()} Unique Event Productions. All rights reserved.</p>
	</div>
</footer>
