import { api } from '../../../api/api';
import { LadingSliderClient } from './LandingSlider';
import { TStrapiImage } from '../../../dto/strapi.dto';

export type TCarouselData = {
	id: number;
	attributes: {
		texto: string | null;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		imagem: {
			data: TStrapiImage['data'][];
		};
	};
};

const LandingSlider = async () => {
	const { data } = await api<{ data: TCarouselData[] }>({
		url: '/carrossels',
		strapiQueryParams: ['populate=*'],
		fetchOptions: {
			next: {
				revalidate: 60 * 60 //1 horas
			}
		}
	});

	return <LadingSliderClient content={data} />;
};

export { LandingSlider };
