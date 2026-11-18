<script lang="ts">
	import type { Game } from '../types/game';

	let { container, games }: { container: HTMLElement; games: Game[] } = $props();

	let progress = $state(0);
	const index = $derived(Math.round(progress * games.length));

	$effect(() => {
		const onScroll = () =>
			(progress = container.scrollTop / (container.scrollHeight - container.clientHeight));

		onScroll();
		container.addEventListener('scroll', onScroll, { passive: true });

		return () => container.removeEventListener('scroll', onScroll);
	});

	function scrub(e: PointerEvent & { currentTarget: HTMLElement }) {
		if (!e.buttons) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const fraction = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
		container.scrollTop = Math.round(fraction * games.length) * container.clientHeight;
	}
</script>

{#if index > 0}
	<nav
		class="fixed top-8 right-4 bottom-8 w-8 touch-none select-none"
		onpointerdown={(e) => {
			e.currentTarget.setPointerCapture(e.pointerId);
			scrub(e);
		}}
		onpointermove={scrub}
	>
		<div class="absolute inset-y-0 right-1 w-1 bg-text/20"></div>
		<div
			class="absolute right-0 flex -translate-y-1/2 items-center gap-2"
			style:top="{progress * 100}%"
		>
			<span class="bg-secondary px-2 py-1 font-press-start-2p text-xs text-background">
				{games[index - 1].releaseDate.slice(0, 4)}
			</span>
			<div class="h-6 w-3 bg-secondary"></div>
		</div>
	</nav>
{/if}
