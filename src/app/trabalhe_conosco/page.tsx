import { api } from '../../api/api';
import { ArrowUpRight } from '../components/Icons';
import { PageTitle } from '../components/page-title';

type TWorkWithUsData = {
	data: {
		id: number;
		attributes: {
			texto: string;
			link: string;
			createdAt: string;
			updatedAt: string;
			publishedAt: string;
		};
	};
};

export default async function TrabalheConosco() {
	const { data } = await api<TWorkWithUsData>({
		url: '/trabalhe-conosco',
		fetchOptions: {
			next: {
				revalidate: 60 * 60 * 24 // 24 horas
			}
		}
	});

	return (
		<main className="flex flex-col">
			<PageTitle title="Trabalhe Conosco" />

			<p className="mb-4 mt-16">{data.attributes.texto} </p>
			<a
				href={data.attributes.link}
				target="_blank"
				className="mouse-over flex items-center gap-1 text-title_blue underline"
			>
				<ArrowUpRight className="h-5 w-5 stroke-title_blue" />
				Trabalhe Conosco
			</a>
		</main>
	);
}
