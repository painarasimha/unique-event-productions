<script>
	import { Facebook, Instagram } from 'lucide-svelte';
</script>

<footer class="bg-secondary py-16 text-secondary-foreground">
	<div
		class="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 overflow-hidden px-4 sm:grid-cols-2 lg:grid-cols-3"
	>
		<div class="space-y-3 text-sm">
			<h4 class="font-serif text-lg">Contact Us</h4>
			<p>Email: unique.event.productions2020@gmail.com</p>
			<p>Phone: +91 99026 64066</p>
		</div>

		<div class="space-y-3">
			<h4 class="font-serif text-lg">Follow Us</h4>
			<div class="flex space-x-4">
				<a
					href="/"
					class="rounded-full border border-secondary-foreground/30 p-2 transition-colors hover:border-primary hover:text-primary"
					aria-label="Facebook"><Facebook class="h-4 w-4" /></a
				>
				<a
					href="https://www.instagram.com/unique_event_productions?igsh=MWs2eWR5dnJhbzJmMA=="
					class="rounded-full border border-secondary-foreground/30 p-2 transition-colors hover:border-primary hover:text-primary"
					aria-label="Instagram"><Instagram class="h-4 w-4" /></a
				>
			</div>
		</div>

		<div class="space-y-3">
			<h4 class="font-serif text-lg">Quick Links</h4>
			<nav class="space-y-2 text-sm">
				<a href="/" class="block transition-colors hover:text-primary">Home</a>
				<a href="/about-us" class="block transition-colors hover:text-primary">About</a>
				<a href="/services" class="block transition-colors hover:text-primary">Services</a>
				<a href="/our-work" class="block transition-colors hover:text-primary">Our Work</a>
				<a href="/contact-us" class="block transition-colors hover:text-primary">Contact</a>
			</nav>
		</div>
	</div>

	<div
		class="mx-auto mt-12 max-w-screen-xl border-t border-secondary-foreground/20 px-4 pt-6 text-center text-sm text-secondary-foreground/70"
	>
		<p>&copy; {new Date().getFullYear()} Unique Event Productions. All rights reserved.</p>
	</div>
</footer>
