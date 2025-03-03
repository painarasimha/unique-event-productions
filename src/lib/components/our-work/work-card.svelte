<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.ts';

  export let imageUrl: string;
  export let category: string;
</script>

<Card.Root class="group hover:shadow-lg overflow-hidden transition-all duration-300">
  <Card.Content class="p-0">
    <div class="relative">
      <img 
      src={imageUrl} 
      alt={category} 
      class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div class="absolute inset-0 flex justify-center items-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="p-4 text-card-foreground text-center">
          <span class="inline-block bg-white/20 mt-2 px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>