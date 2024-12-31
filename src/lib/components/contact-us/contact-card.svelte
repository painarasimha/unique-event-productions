<script lang="ts">
	import { Phone, Mail, MapPin, type Icon as IconType } from 'lucide-svelte';

	type ContactInfo = {
		icon: typeof IconType;
		name: string;
		details: string[];
	};

	export let info: ContactInfo;
</script>

<div
	class="flex flex-col items-center rounded-xl shadow-inner shadow-gray-500/20 bg-gray-700/10 border-2 p-4 transition-all hover:shadow-lg sm:p-6"
>
	<svelte:component this={info.icon} class="mb-2 h-6 w-6 text-primary text-center md:mb-4 md:h-8 md:w-8" />
	<h3 class="text-lg font-sans font-medium mb-2 md:text-2xl text-center md:font-semibold">{info.name}</h3>
  <div class="w-full flex flex-col items-center">
		{#each info.details as detail}
			<p class="text-foreground text-[12px] text-center break-words overflow-hidden max-w-full md:text-md md:text-sm">{detail}</p>
		{/each}
	</div>
</div>
