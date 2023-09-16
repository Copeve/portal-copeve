import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../components/spacer';
import { PageTitle } from '../components/page-title';
import { api } from '../../api/api';
import { TApiMeta } from '../../dto/strapi.dto';
import { Pagination } from '../components/pagination';

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		noticia: string;
		subtitulo: string | null;
	};
};

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NewsList({ searchParams }: Props) {
	const page =
		typeof searchParams.pagina === 'string' ? searchParams.pagina : '1';

	const { data, meta } = await getData(page);

	return (
		<main>
			<PageTitle title="Notícias" className="pb-4" />

			{data.map(({ id, attributes: attrs }) => (
				<Link
					key={String(id)}
					prefetch={false}
					href={`noticias/${id}`}
					className="group flex w-full flex-col border-b pb-4 pt-2"
				>
					<time
						className={'mb-2 text-lg font-bold text-title_blue'}
						dateTime={format(
							new Date(attrs.publishedAt),
							'yyyy-MM-dd'
						)}
					>
						{format(new Date(attrs.publishedAt), 'dd LLL yyyy', {
							locale: ptBR
						})}
					</time>

					<h2 className="mb-2 text-lg font-bold leading-5 transition-colors group-hover:text-title_blue">
						{attrs.titulo}
					</h2>

					<p className="text-sm leading-4">{attrs.subtitulo}</p>
				</Link>
			))}

			<Spacer />

			<div className="flex w-full justify-center">
				{data.length > 0 && (
					<Pagination length={meta.pagination.pageCount} />
				)}
			</div>

			<Spacer />
		</main>
	);
}

async function getData(page: string) {
	const { data, meta, error } = await api<{ data: TNews[]; meta: TApiMeta }>({
		url: '/noticias',
		strapiQueryParams: [
			'pagination[pageSize]=10',
			`pagination[page]=${page}`,
			'sort=publishedAt:desc'
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
