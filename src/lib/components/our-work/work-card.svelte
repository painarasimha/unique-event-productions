<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.ts';

  export let imageUrl: string;
  export let category: string;
</script>

<Card.Root class="overflow-hidden group hover:shadow-lg transition-all duration-300">
  <Card.Content class="p-0">
    <div class="relative">
      <img 
      src={imageUrl} 
      alt={category} 
      class="w-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div class="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div class="text-card-foreground text-center p-4">
          <span class="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>