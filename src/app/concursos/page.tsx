import { PageTitle } from '../components/page-title';
import { Spacer } from '../components/spacer';
import { ContestBox } from '../components/contest-box';
import { api } from '../../api/api';

export type TContest = {
	id: number;
	attributes: {
		nome: string;
		ano: number;
		data_inicio: string;
		data_fim: string;
		encerrado: boolean;
		link_incricao: string | null;
		destaque: boolean;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		link: string | null;
		link_area_candidato: string | null;
		logo: {
			data: {
				textoAlt?: string;
				link?: string;
			} | null;
		};
	};
};

const Concursos = async () => {
	const { data: contestsData } = await api<{ data: TContest[] }>({
		url: '/concursos',
		strapiQueryParams: ['populate[0]=logo'],
		fetchOptions: {
			cache: 'no-cache'
		}
	});

	return (
		<main>
			<PageTitle title="Concursos em Andamento" className="mb-14" />

			<ContestBox
				type={'2'}
				data={contestsData}
				defaultValue={`item-${contestsData[0].id}`}
			/>

			<Spacer />

			<div className="flex w-full justify-center">
				<button className="mouse-over bg-primary p-4 text-xl text-white">
					Carregar Mais
				</button>
			</div>

			<Spacer />
		</main>
	);
};

export default Concursos;
