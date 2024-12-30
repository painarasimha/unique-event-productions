<script lang="ts">
  interface Schedule {
    days: string;
    hours: string;
  }

  const businessHours: Schedule[] = [
    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM"},
    { days: "Saturday", hours: "10:00 AM - 4:00 PM"},
    { days: "Sunday", hours: "Closed"}
  ];
</script>

<div class="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
  <h3 class="text-lg font-semibold mb-4 sm:text-xl">Business Hours</h3>
  <div class="space-y-2 sm:space-y-3">
    {#each businessHours as schedule}
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <span class="text-foreground text-sm sm:text-base">{schedule.days}</span>
        <span class="font-medium text-sm sm:text-base">{schedule.hours}</span>
      </div>
    {/each}
  </div>
</div>