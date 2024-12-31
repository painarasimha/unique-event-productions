<script lang="ts">
  import OurWork from "$lib/components/our-work/our-work.svelte";
  import type { WorkItem } from "$lib/types/our-work.ts";
  import concerts from '$lib/assets/concerts.avif';
  import corporate from '$lib/assets/corporate.avif';
  import festival from '$lib/assets/festival.avif';
  import party from '$lib/assets/party.avif';

  const workItems: WorkItem[] = [ //TODO Add in proper images
    {
      id:"1",
      imageUrl: `${corporate}`,
      category: "Corporate" 
    },
    {
      id:"2",
      imageUrl: `${party}`,
      category: "Parties" 
    },
    {
      id:"3",
      imageUrl: `${concerts}`,
      category: "Concerts" 
    },
    {
      id:"4",
      imageUrl: `${festival}`,
      category: "Festival" 
    },
    {
      id:"5",
      imageUrl: `${corporate}`,
      category: "Corporate" 
    },
  ];
</script>

<OurWork items={workItems} />