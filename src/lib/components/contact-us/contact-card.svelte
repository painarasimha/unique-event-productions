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
	class="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg sm:p-6"
>
	<svelte:component this={info.icon} class="mb-2 h-6 w-6 text-primary sm:mb-4 sm:h-8 sm:w-8" />
	<h3 class="text-lg font-semibold mb-2 sm:text-xl">{info.name}</h3>
  {#each info.details as detail}
    <p class="text-foreground text-center text-sm sm:text-base">{detail}</p>
  {/each}
</div>
