import { PageTitle } from '../components/page-title';
import { Spacer } from '../components/spacer';
import { ContestBox } from '../components/contest-box';
import { api } from '../../api/api';
import { TStrapiImage, TApiMeta } from '../../dto/strapi.dto';
import { notFound } from 'next/navigation';
import { Pagination } from '../components/pagination';

type TContest = {
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

const Concursos = async ({ searchParams }: Props) => {
	const page =
		typeof searchParams.pagina === 'string' ? searchParams.pagina : '1';

	const data = await Promise.all([getContestsData(page)]);

	const [response] = data;

	const { data: contestsData, meta: paginationData } = response;

	return (
		<main>
			<PageTitle title="Concursos em Andamento" className="mb-14" />

			{contestsData.length > 0 ? (
				<ContestBox
					layout={'1'}
					data={contestsData}
					defaultValue={`item-${contestsData[0].id}`}
				/>
			) : (
				<></>
			)}

			<Spacer />

			<div className="flex w-full justify-center">
				{contestsData.length > 0 && (
					<Pagination length={paginationData.pagination.pageCount} />
				)}
			</div>

			<Spacer />
		</main>
	);
};

async function getContestsData(page: string) {
	const { data, error, meta } = await api<{
		data: TContest[];
		meta: TApiMeta;
	}>({
		url: '/concursos',
		strapiQueryParams: [
			'populate[0]=logo',
			'fields[0]=nome',
			'fields[1]=data_inicio',
			'fields[2]=data_fim',
			'sort=publishedAt:desc',
			'filters[encerrado][$eq]=false',
			'pagination[pageSize]=4',
			`pagination[page]=${page}`
		],
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		if (error.status === 404) return notFound();
		throw new Error(error.message);
	}

	return { data, meta };
}

export default Concursos;
