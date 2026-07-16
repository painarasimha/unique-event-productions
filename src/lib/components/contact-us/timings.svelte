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
	class="flex h-full flex-col items-center justify-center rounded-sm border border-border p-6 text-center transition-colors hover:border-primary/50"
>
	<h3 class="mb-3 font-serif text-lg">Business Hours</h3>
	<div class="flex w-full min-w-0 flex-col items-center gap-2">
		{#each businessHours as schedule}
			<div class="flex min-w-0 flex-col items-center">
				<span class="text-sm text-foreground">{schedule.days}</span>
				<span class="text-sm text-muted-foreground">{schedule.hours}</span>
			</div>
		{/each}
	</div>
</div>
