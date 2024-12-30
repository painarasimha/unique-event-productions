<script lang="ts">
  import OurWork from "$lib/components/our-work/our-work.svelte";
  import type { WorkItem } from "$lib/types/our-work.ts";

  const workItems: WorkItem[] = [
    {
      id:"1",
      imageUrl: '',
      category: "Corporate" 
    },
    {
      id:"2",
      imageUrl: '',
      category: "Parties" 
    },
    {
      id:"3",
      imageUrl: '',
      category: "Corporate" 
    },
    {
      id:"4",
      imageUrl: '',
      category: "Concerts" 
    },
    {
      id:"5",
      imageUrl: '',
      category: "Corporate" 
    },
  ];
</script>

<OurWork items={workItems} />