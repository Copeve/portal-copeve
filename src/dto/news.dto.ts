type TImageFormats = {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
};

export type TStrapiImage = {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText: string;
			caption: string | null;
			width: number;
			height: number;
			formats: {
				large: TImageFormats;
				small: TImageFormats;
				medium: TImageFormats;
				thumbnail: TImageFormats;
			};
			hash: string;
			ext: string;
			mime: string;
			size: number;
			url: string;
			previewUrl: string | null;
			provider: string;
			provider_metadata: null;
			createdAt: string;
			updatedAt: string;
		};
	} | null;
};
