<script lang="ts">
	import MobileNav from "./nav/mobile-nav.svelte";
    import MainNav from "./nav/main-nav.svelte";
	import { buttonVariants } from "./ui/button/index.ts";
    import { Github, Twitter } from 'lucide-svelte'
	import { cn } from "$lib/utils.js";
</script>

<header
	class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<nav class="flex items-center">
				<a href="/" target="_blank" rel="noopener noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
							}),
							"h-8 w-8 px-0"
						)}
					>
						<Github class="h-4 w-4" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
				<a href="/" target="_blank" rel="noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
							}),
							"h-8 w-8 px-0"
						)}
					>
						<Twitter class="h-3 w-3 fill-current" />
						<span class="sr-only">X (formerly known as Twitter)</span>
					</div>
				</a>
				<!-- <ModeToggle /> -->
			</nav>
		</div>
	</div>
</header>