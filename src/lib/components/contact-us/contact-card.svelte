<script lang="ts">
	import { type Icon as IconType } from 'lucide-svelte';

	type ContactInfo = {
		icon: typeof IconType;
		name: string;
		details: string[];
	};

	export let info: ContactInfo;
</script>

<div
	class="flex flex-col items-center rounded-xl border-2 bg-gray-700/10 p-4 shadow-inner shadow-gray-500/20 transition-all hover:shadow-lg sm:p-6"
>
	<svelte:component
		this={info.icon}
		class="mb-2 h-6 w-6 text-center text-primary md:mb-4 md:h-8 md:w-8"
	/>
	<h3 class="mb-2 text-center font-sans text-lg font-medium md:text-2xl md:font-semibold">
		{info.name}
	</h3>
	<div class="flex w-full flex-col items-center">
		{#each info.details as detail}
			{#if info.name.toLowerCase().includes('phone')}
				<a
					href="tel:{detail.replace(/\D/g, '')}"
					class="md:text-md max-w-full overflow-hidden break-words text-center text-[12px] text-foreground transition-colors hover:text-primary md:text-sm"
				>
					{detail}
				</a>
			{:else if info.name.toLowerCase().includes('email') || info.name
					.toLowerCase()
					.includes('mail')}
				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&to={detail}"
					target="_blank"
					rel="noopener noreferrer"
					class="md:text-md max-w-full overflow-hidden break-words text-center text-[12px] text-foreground transition-colors hover:text-primary md:text-sm"
				>
					{detail}
				</a>
			{:else}
				<p
					class="md:text-md max-w-full overflow-hidden break-words text-center text-[12px] text-foreground md:text-sm"
				>
					{detail}
				</p>
			{/if}
		{/each}
	</div>
</div>
