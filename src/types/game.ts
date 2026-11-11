export type Game = {
	title: string;
	developer: string;
	publisher: string;
	platform: string;
	releaseDate: string;
	coverArtUrl: string;
	genres: string[];
	description: string;
};

export type platform = "Game Boy" | "Game Boy Color" | "Game Boy Advance" | "Playstation" | "PICO-8"
