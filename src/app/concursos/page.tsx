import { PageTitle } from '../components/page-title';
import { Spacer } from '../components/spacer';
import { ContestBox } from '../components/contest-box';
import { api } from '../../api/api';

type TContest = {
	id: number;
	attributes: {
		nome: string;
		data_inicio: string;
		data_fim: string;
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
		strapiQueryParams: [
			'populate[0]=logo',
			'fields[0]=nome',
			'fields[1]=data_inicio',
			'fields[2]=data_fim'
		],
		fetchOptions: {
			cache: 'no-cache'
		}
	});

	return (
		<main>
			<PageTitle title="Concursos em Andamento" className="mb-14" />

			<ContestBox
				type={'1'}
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
