<script lang="ts">
	import Game from './Game.svelte';
	import type { Game as GameType } from '../types/game';

	const { games }: { games: GameType[] } = $props();
</script>

<main>
	<section>
		<ol>
			{#each games as game (game.title)}
				<Game {...game} />
			{/each}
		</ol>
	</section>
</main>
