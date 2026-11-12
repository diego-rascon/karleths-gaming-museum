<script lang="ts">
	import GamesList from '../components/GamesList.svelte';
	import Hero from '../components/Hero.svelte';
	import Scrubber from '../components/Scrubber.svelte';
	import { games } from '../data/games';

	const sortedGames = games.toSorted((a, b) => a.releaseDate.localeCompare(b.releaseDate));
	let scroller = $state<HTMLElement>();
</script>

<div bind:this={scroller} class="h-dvh snap-y snap-mandatory overflow-y-scroll bg-background">
	<Hero />
	<GamesList games={sortedGames} />
</div>
<Scrubber container={scroller} games={sortedGames} />
