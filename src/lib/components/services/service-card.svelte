<script lang="ts">
	export let service: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
	};
</script>

<div class="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm">
	<img
		src={service.imageUrl}
		alt={service.title}
		class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
	<div class="relative z-10 p-6 text-white">
		<h3 class="font-serif text-xl sm:text-2xl">{service.title}</h3>
		<p class="mt-2 text-sm text-white/80">{service.shortDesc}</p>
		<a href="/contact-us" class="mt-4 inline-block border-b border-primary text-sm text-primary">
			Enquire
		</a>
	</div>
</div>
