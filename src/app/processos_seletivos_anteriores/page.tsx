import { api } from '../../api/api';
import { TStrapiImage } from '../../dto/strapi.dto';
import ScrollToTop from '../components/scroll-to-top';
import { PreviousContestsClientSide } from './client-side';

export type TContestGroupData = {
	nome: string;
	descricao: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

export type TContestGroupResponse = {
	id: number;
	attributes: TContestGroupData;
};

export type TContestData = {
	id: number;
	attributes: {
		nome: string;
		data_inicio: string;
		data_fim: string;
		logo: TStrapiImage;
	};
};

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PreviousContests({ searchParams }: Props) {
	const groupId =
		typeof searchParams.grupo === 'string' ? searchParams.grupo : '';

	const groups = await getGroupsData();
	const contests = await getContestsData(groupId);
	return (
		<>
			<ScrollToTop />
			<PreviousContestsClientSide groups={groups} contests={contests} />
		</>
	);
}

const getGroupsData = async () => {
	const { data, error } = await api<{ data: TContestGroupResponse[] }>({
		url: '/tipo-concursos',
		fetchOptions: {
			next: {
				revalidate: 60 * 60 // 1 hora
			}
		}
	});

	if (error) throw new Error(error.message);

	return data;
};

const getContestsData = async (groupId: string) => {
	const { data, error } = await api<{ data: TContestData[] }>({
		url: '/concursos',
		strapiQueryParams: [
			'populate[0]=logo',
			`filters[tipo_concurso][id][$eq]=${groupId}`
		],
		fetchOptions: {
			next: {
				revalidate: 60 // 1 minuto
			}
		}
	});

	if (error) throw new Error(error.message);

	return data;
};
