<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	let { children, class: className, ...rest }: SvelteHTMLElements['div'] = $props();
</script>

<div class={["h-dvh snap-start snap-always", className]} {...rest}>
	{@render children?.()}
</div>
