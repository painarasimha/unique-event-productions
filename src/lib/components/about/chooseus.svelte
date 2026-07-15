<script>
	const points = [
		{
			title: 'Every Event Begins with Your Vision',
			body: 'At Unique Event Productions, we believe every unforgettable event starts with your unique vision. We transform dreams into extraordinary realities, weaving your story into every detail to create events that are as memorable as they are one-of-a-kind.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907198/unique-event-productions/wedding1.jpg'
		},
		{
			title: 'The Power of Understanding',
			body: 'What sets us apart is our commitment to understanding you. By listening to your goals, preferences, and aspirations, we ensure no detail is overlooked. This personal touch results in events that reflect your personality, values, and style.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907499/unique-event-productions/Exhibition1.jpg'
		},
		{
			title: 'Where Creativity Meets Strategy',
			body: 'Our team blends artistic creativity with strategic planning to design intelligent, breathtaking events. From initial concepts to the finest details—décor, lighting, entertainment, and ambiance—every element is meticulously crafted to bring your vision to life seamlessly.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740914903/unique-event-productions/festival1.jpg'
		},
		{
			title: 'Flawless Execution, Memorable Results',
			body: 'With a focus on precision and professionalism, we ensure every event unfolds effortlessly. Whether it’s an intimate gathering or a grand celebration, we manage all logistics behind the scenes, delivering extraordinary experiences that leave a lasting impression.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert2.jpg'
		}
	];
</script>

<section class="bg-muted/50 py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-16 text-center font-serif text-3xl sm:text-4xl">Why Choose Us?</h2>
		<div class="flex flex-col gap-16 sm:gap-24">
			{#each points as point, i}
				<div
					class="grid items-center gap-8 md:grid-cols-2 md:gap-16 {i % 2 === 1
						? 'md:[&>*:first-child]:order-2'
						: ''}"
				>
					<div class="aspect-[4/3] overflow-hidden rounded-sm">
						<img src={point.img} alt={point.title} class="h-full w-full object-cover" />
					</div>
					<div>
						<h3 class="font-serif text-2xl sm:text-3xl">{point.title}</h3>
						<p class="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
							{point.body}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
