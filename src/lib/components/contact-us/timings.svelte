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

<div class="bg-gray-700/10 rounded-xl shadow-inner mb-4 shadow-gray-500/20 p-4 border-2 sm:p-6 lg:p-8">
  <h3 class="text-lg font-sans font-medium mb-4 text-center md:font-semibold md:text-2xl">Business Hours</h3>
  <div class="space-y-2 md:space-y-5">
    {#each businessHours as schedule}
      <div class="flex flex-col items-center ">
        <span class="text-foreground font-medium text-sm md:text-lg">{schedule.days}</span>
        <span class="font-medium text-sm md:text-base">{schedule.hours}</span>
      </div>
    {/each}
  </div>
</div>