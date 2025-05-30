<script lang="ts">
	interface Schedule {
		days: string;
		hours: string;
	}

	const businessHours: Schedule[] = [
		{ days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
		{ days: 'Saturday', hours: '9:00 AM - 4:00 PM' },
		{ days: 'Sunday', hours: '10:00 AM - 12:00 PM' }
	];
</script>

<div
	class="mb-4 rounded-xl border-2 bg-gray-700/10 p-4 shadow-inner shadow-gray-500/20 sm:p-6 lg:p-8"
>
	<h3 class="mb-4 text-center font-sans text-lg font-medium md:text-2xl md:font-semibold">
		Business Hours
	</h3>
	<div class="space-y-2 md:space-y-5">
		{#each businessHours as schedule}
			<div class="flex flex-col items-center">
				<span class="text-sm font-medium text-foreground md:text-lg">{schedule.days}</span>
				<span class="text-sm font-medium md:text-base">{schedule.hours}</span>
			</div>
		{/each}
	</div>
</div>
