import Link from 'next/link';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../components/spacer';
import { PageTitle } from '../components/page-title';
import { api } from '../../api/api';
import { notFound } from 'next/navigation';

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		noticia: string;
	};
};

async function getData(): Promise<TNews[]> {
	const { data, error } = await api<{ data: TNews[] }>({
		url: '/noticias',
		strapiQueryParams: [],
		fetchOptions: {
			cache: 'no-cache'
		}
	});

	if (error) {
		if (error.status === 404) return notFound();
		throw new Error(error.message);
	}

	return data;
}

export default async function NewsList() {
	const data = await getData();

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
						{format(new Date(attrs.publishedAt), 'dd LLL', {
							locale: ptBR
						})}
					</time>

					<h2 className="mb-2 text-lg font-bold leading-5 transition-colors group-hover:text-title_blue">
						{attrs.titulo}
					</h2>

					<p className="text-sm leading-4">{attrs.titulo}</p>
				</Link>
			))}

			<Spacer />
		</main>
	);
}
