import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../components/spacer';
import { PageTitle } from '../components/page-title';
import { api } from '../../api/api';
import { TApiMeta } from '../../dto/strapi.dto';
import { Pagination } from '../components/pagination';
import ScrollToTop from '../components/scroll-to-top';

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
			<ScrollToTop />
			<PageTitle title="Notícias" className="pb-12" />

			{data.map(({ id, attributes: attrs }) => (
				<Link
					key={String(id)}
					prefetch={false}
					href={`noticias/${id}`}
					className="group flex w-full flex-col border-b pb-6 pt-4"
				>
					<time
						className={'mb-2 text-lg font-bold text-title_blue'}
						dateTime={format(
							toDate(attrs.publishedAt.split('T')[0]),
							'yyyy-MM-dd'
						)}
					>
						{format(
							toDate(attrs.publishedAt.split('T')[0]),
							'dd LLL yyyy',
							{
								locale: ptBR
							}
						)}
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
			'filters[tipo_noticia][id][$not]=1',
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
