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
	class="flex h-full flex-col items-center justify-center rounded-sm border border-border p-6 text-center transition-colors hover:border-primary/50"
>
	<svelte:component this={info.icon} class="mb-3 h-6 w-6 shrink-0 text-primary" />
	<h3 class="mb-2 font-serif text-lg">{info.name}</h3>
	<div class="flex w-full min-w-0 flex-col items-center gap-1">
		{#each info.details as detail}
			{#if info.name.toLowerCase().includes('phone')}
				<a
					href="tel:{detail.replace(/\D/g, '')}"
					class="min-w-0 max-w-full break-words text-sm text-muted-foreground transition-colors hover:text-primary"
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
					class="min-w-0 max-w-full break-words text-sm text-muted-foreground transition-colors hover:text-primary"
				>
					{detail}
				</a>
			{:else}
				<p class="min-w-0 max-w-full break-words text-sm text-muted-foreground">{detail}</p>
			{/if}
		{/each}
	</div>
</div>
