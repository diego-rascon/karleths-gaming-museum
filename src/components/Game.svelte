<script lang="ts">
	import type { Game } from '../types/game';
	import Slide from './Slide.svelte';

	let {
		title,
		developer,
		publisher,
		platform,
		releaseDate,
		coverArtUrl,
		genres,
		description
	}: Game = $props();
</script>

<Slide class="max-w-7xl mx-auto flex flex-col p-4 pr-24">
	<div class="mx-auto mb-4">
		<enhanced:img src={coverArtUrl} alt={`Cover art for ${title}`} class="h-96 object-cover"></enhanced:img>
	</div>
	<h2 class="font-press-start-2p text-primary text-3xl">{title}</h2>
	<div >
		<span>{releaseDate}</span>
		<span>{publisher}</span>
		<span>{developer}</span>
	</div>
	<div>
		{#each genres as genre (genre)}
			<span>{genre}</span>
		{/each}
	</div>
	<p class="font-pixelify-sans text-xl">{description}</p>
</Slide>
