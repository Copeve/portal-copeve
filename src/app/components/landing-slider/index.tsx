import { api } from '../../../api/api';
import { LadingSliderClient } from './LandingSlider';

export type CarouselData = {
	id: number;
	attributes: {
		texto: string | null;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		imagem: {
			data: {
				id: number;
				attributes: {
					name: string;
					alternativeText: string;
					width: number;
					height: number;
					ext: string;
					url: string;
				};
			}[];
		};
	};
};

const LandingSlider = async () => {
	const { data } = await api<{ data: CarouselData[] }>({
		url: '/carrossels',
		strapiQueryParams: ['populate=*'],
		fetchOptions: {
			next: {
				revalidate: 60 * 60 * 24 //24 horas
			}
		}
	});

	return <LadingSliderClient content={data} />;
};

export { LandingSlider };
