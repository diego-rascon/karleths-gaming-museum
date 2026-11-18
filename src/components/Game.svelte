<script lang="ts">
	import type { Game } from '../types/game';
	import Slide from './Slide.svelte';

	let {
		title,
		publisher,
		platform,
		releaseDate,
		coverArtUrl,
		genres,
		description
	}: Game = $props();
</script>

<Slide class="max-w-7xl mx-auto flex flex-col p-4 pt-16 pr-28 relative">
	<div class="mb-6">
		<enhanced:img
			src={coverArtUrl}
			alt={`Cover art for ${title}`}
			class="w-full max-h-96 object-contain"
		></enhanced:img>
	</div>
	<h2 class="font-press-start-2p text-primary text-3xl mb-4">{title}</h2>
	<div class="font-pixelify-sans text-text mb-1">
		<span>{releaseDate}</span>
		<span>{publisher}</span>
	</div>
	<div class="font-pixelify-sans mb-4 flex gap-2">
		{#each genres as genre (genre)}
			<span class="bg-primary text-background px-2">{genre}</span>
		{/each}
	</div>
	<p class="font-pixelify-sans text-text text-xl">{description}</p>
	<div class="absolute bg-secondary font-pixelify-sans text-text bottom-4">
		<span>{platform}</span>
	</div>
</Slide>
