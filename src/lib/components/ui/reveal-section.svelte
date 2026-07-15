<script lang="ts">
	import { inview } from 'svelte-inview';

	let className: string | undefined = undefined;
	export { className as class };

	let isInView = false;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10% 0px' }}
	on:inview_enter={() => (isInView = true)}
	class="transition-all duration-700 ease-out {isInView
		? 'translate-y-0 opacity-100'
		: 'translate-y-5 opacity-0'} {className ?? ''}"
>
	<slot />
</div>
