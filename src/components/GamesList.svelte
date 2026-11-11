<script lang="ts">
	import { games } from '../data/games';
	import Game from './Game.svelte';

	const sortedGames = games.toSorted((a, b) => a.releaseDate.localeCompare(b.releaseDate));
</script>

<main>
	<section>
		<ol>
			{#each sortedGames as game (game.title)}
				<Game {...game} />
			{/each}
		</ol>
	</section>
</main>
