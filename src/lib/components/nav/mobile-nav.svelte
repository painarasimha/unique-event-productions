<script lang="ts">
	import MobileLink from './mobile-link.svelte';
	import { Menu } from 'lucide-svelte';
	import Logo from '$lib/assets/Primary Logo.png'
	import * as Sheet from '../ui/sheet/index.ts';
	import Button from '../ui/button/button.svelte';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import { docsConfig } from '$lib/config/docs.ts';

	let open = false;
</script>

<!-- Mobile Nav -->
<div class="flex w-full items-center justify-between px-4 md:hidden">
	<img src={Logo} alt="logo-img" class="w-8 h-8">

	<Sheet.Root bind:open>
		<Sheet.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" class="p-0">
				<Menu class="h-7 w-7" />
				<span class="sr-only">Toggle Menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="right" class="pr-0">
			<MobileLink href="/" class="flex items-center" bind:open>
				
				<img src={Logo} alt="logo-img" class="mr-3 h-7 w-7" />
				<!-- TODO : Change Website name -->
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
