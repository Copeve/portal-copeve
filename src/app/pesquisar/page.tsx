import Link from 'next/link';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { HiSearch } from 'react-icons/hi';
import { api } from '../../api/api';
import { Spacer } from '../components/spacer';
import { RawToMarkdown } from '../components/react-markdown';
import ScrollToTop from '../components/scroll-to-top';
import { twJoin } from 'tailwind-merge';

type SearchResult = {
	noticias: {
		id: number;
		publishedAt: string;
		transliterations: {
			titulo: string;
			noticia: string;
		};
	}[];
	concursos: {
		id: number;
		publishedAt: string;
		transliterations: {
			nome: string;
		};
	}[];
};

type Props = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SearchPage({ searchParams }: Props) {
	const term = searchParams.termo;
	let data: SearchResult;

	if (typeof term === 'string' && term.trim()) {
		data = await getDate(term);
	} else {
		data = { noticias: [], concursos: [] };
	}

	const { concursos, noticias } = data;

	const hasNoResults = concursos.length === 0 && noticias.length === 0;

	return (
		<main className="flex flex-col">
			<ScrollToTop />

			<form
				action={'/pesquisar'}
				className="relative mb-8 block h-min w-full max-w-xl self-center lg:hidden"
			>
				<input
					type="search"
					name="termo"
					placeholder="Buscar por"
					className="min-h-[40px] w-full rounded-full border py-3 pl-5 pr-16 text-sm placeholder:text-lg"
					autoFocus
				/>

				<button className="absolute right-4 top-0 h-full" type="submit">
					<HiSearch className="h-[30px] w-[30px] fill-icon_blue" />
				</button>
			</form>

			<span className={twJoin(!term && 'hidden')}>
				Resultados para busca: <strong>{term}</strong>
			</span>

			{hasNoResults ? (
				<div className="mt-16 flex justify-center">
					<p className="text-lg opacity-75">
						Nenhum resultado encontrado
					</p>
				</div>
			) : (
				<ul className="mt-16">
					{concursos.map(({ id, publishedAt, transliterations }) => {
						return (
							<li key={id}>
								<Link
									key={String(id)}
									prefetch={false}
									href={`/concursos/${id}`}
									className="group flex w-full flex-col border-b pb-4 pt-2"
								>
									<div className="flex items-center justify-between">
										<ContentDate date={publishedAt} />
										<ContentTag label={'Concurso'} />
									</div>

									<ContentTitle
										title={transliterations.nome}
									/>
								</Link>
							</li>
						);
					})}
					{noticias.map(({ id, publishedAt, transliterations }) => {
						return (
							<li key={id}>
								<Link
									key={String(id)}
									prefetch={false}
									scroll={false}
									href={`/noticias/${id}`}
									className="group flex w-full flex-col border-b pb-4 pt-2"
								>
									<div className="flex items-center justify-between">
										<ContentDate date={publishedAt} />
										<ContentTag label={'Notícia'} />
									</div>

									<ContentTitle
										title={transliterations.titulo}
									/>

									<RawToMarkdown
										className="text-sm leading-4"
										text={transliterations.noticia}
										components={{
											a: ({
												children,
												href,
												...props
											}) => (
												<span
													className="text-title_blue underline"
													{...props}
												>
													{children}
												</span>
											)
										}}
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			)}

			<Spacer />
			<Spacer />
		</main>
	);
}

function ContentDate({ date }: { date: string }) {
	return (
		<time
			className={'mb-2 text-lg font-bold text-title_blue'}
			dateTime={format(new Date(date), 'yyyy-MM-dd')}
		>
			{format(new Date(date), 'dd LLL yyyy', {
				locale: ptBR
			})}
		</time>
	);
}

function ContentTitle({ title }: { title: string }) {
	return (
		<h2 className="mb-2 text-lg font-bold leading-5 transition-colors group-hover:text-title_blue">
			{title}
		</h2>
	);
}

function ContentTag({ label }: { label: 'Concurso' | 'Notícia' }) {
	let color = 'bg-zinc-200';

	if (label === 'Concurso') color = 'bg-title_blue';
	else if (label === 'Notícia') color = 'bg-yellow_1';

	return (
		<span
			className={`rounded ${color} mb-2 px-2 py-1 text-sm text-white dark:bg-white dark:text-black`}
		>
			{label}
		</span>
	);
}

async function getDate(term: string) {
	const data = await api<SearchResult | { error: Record<string, unknown> }>({
		url: '/fuzzy-search/search',
		strapiQueryParams: [`query=${term}`],
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (data.error) throw new Error(data.error.message);

	return data as SearchResult;
}
