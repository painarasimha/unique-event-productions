<script lang="ts">
	import MobileLink from './mobile-link.svelte';
	import { Menu } from 'lucide-svelte';
	import Logo from '$lib/assets/Primary Logo.png';
	import * as Sheet from '../ui/sheet/index.ts';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import { docsConfig } from '$lib/config/docs.ts';

	let open = false;
</script>

<!-- Mobile Nav -->
<div class="flex w-full items-center justify-between px-4 md:hidden">
	<img src={Logo} alt="logo-img" class="h-8 w-8" />

	<Sheet.Root bind:open>
		<Sheet.Trigger>
			<Menu class="h-7 w-7 rounded-full border-2 p-1" />
		</Sheet.Trigger>
		<Sheet.Content side="right" class="pr-0">
			<MobileLink href="/" class="flex items-center" bind:open>
				<img src={Logo} alt="logo-img" class="mr-3 h-7 w-7" />
				<span class="font-bold">Unique Event Productions</span>
			</MobileLink>
			<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
				<div class="flex flex-col space-y-3">
					{#each docsConfig.mainNav as navItem, index (navItem + index.toString())}
						{#if navItem.href}
							<MobileLink href={navItem.href} bind:open class="text-foreground">
								{navItem.title}
							</MobileLink>
						{/if}
					{/each}
				</div>
			</ScrollArea>
		</Sheet.Content>
	</Sheet.Root>
</div>
