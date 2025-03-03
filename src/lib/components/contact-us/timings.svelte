<script lang="ts">
  interface Schedule {
    days: string;
    hours: string;
  }

  const businessHours: Schedule[] = [
    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM"},
    { days: "Saturday", hours: "9:00 AM - 4:00 PM"},
    { days: "Sunday", hours: "10:00 AM - 12:00 PM"}
  ];
</script>

<div class="bg-gray-700/10 shadow-gray-500/20 shadow-inner mb-4 p-4 sm:p-6 lg:p-8 border-2 rounded-xl">
  <h3 class="mb-4 font-sans font-medium md:font-semibold text-lg md:text-2xl text-center">Business Hours</h3>
  <div class="space-y-2 md:space-y-5">
    {#each businessHours as schedule}
      <div class="flex flex-col items-center">
        <span class="font-medium text-foreground text-sm md:text-lg">{schedule.days}</span>
        <span class="font-medium text-sm md:text-base">{schedule.hours}</span>
      </div>
    {/each}
  </div>
</div>