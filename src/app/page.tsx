import React from 'react';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

import { NewsBox } from './components/home-page/newsbox';
import { Section } from './components/home-page/section/indext';
import { Spacer } from './components/spacer';
import { ContestBox } from './components/contest-box';
import { ShowResults } from './components/count-up-display';
import { api } from '../api/api';
import { TStrapiImage } from '../dto/strapi.dto';

type TContest = {
	id: number;
	attributes: {
		nome: string;
		data_inicio: string;
		data_fim: string;
		logo: TStrapiImage;
	};
};

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		imagem_noticia: TStrapiImage;
	};
};

type TResult = {
	id: number;
	attributes: {
		resultado: string;
		valor: number;
	};
};

export default async function Home() {
	const data = await Promise.all([
		getContestsData(),
		getNewsData(),
		getResultsData()
	]);

	const [contestsData, newsData, resultsData] = data;

	return (
		<main className="flex max-w-full flex-1 flex-col pb-20">
			<div className="max-w-full self-center">
				{contestsData && (
					<>
						<Section title="Concurso Destaques">
							<ContestBox
								data={contestsData}
								layout={contestsData.length === 1 ? '2' : '1'}
								defaultValue={
									contestsData.length === 1 &&
									`item-${contestsData[0].id}`
								}
							/>
							<Link
								href="/concursos"
								prefetch={false}
								className="ml-auto mt-8 flex w-max items-center justify-center text-lg font-bold text-title_blue dark:text-white"
							>
								Ver todos os concursos{' '}
								<HiChevronRight className="h-6 w-6 fill-yellow_1 pt-px" />
							</Link>
						</Section>

						<Spacer />
					</>
				)}

				{newsData && (
					<>
						<Section title="Notícias">
							<ol className="grid grid-cols-1 gap-4 gap-y-10 mG:grid-cols-2 lg:grid-cols-2">
								{newsData.map((item) => (
									<li
										key={String(item.id)}
										className="w-full"
									>
										<NewsBox data={item} />
									</li>
								))}
							</ol>

							<Link
								href="/noticias"
								prefetch={false}
								className="ml-auto mt-8 flex w-max items-center justify-center text-lg font-bold text-title_blue dark:text-white"
							>
								Ver todas as notícias{' '}
								<HiChevronRight className="h-6 w-6 fill-yellow_1 pt-px" />
							</Link>
						</Section>

						<Spacer />
					</>
				)}

				{resultsData && (
					<Section title="Resultados">
						<div className="flex flex-col flex-wrap justify-between gap-16 py-16 sm:flex-row">
							{resultsData.map(({ id, attributes: attrs }) => (
								<ShowResults
									key={String(id)}
									className="flex-1"
									end={attrs.valor}
									title={attrs.resultado}
								/>
							))}
						</div>
					</Section>
				)}
				<Spacer />
			</div>
		</main>
	);
}

async function getContestsData() {
	const { data: contestsData, error } = await api<{ data: TContest[] }>({
		url: '/concursos',
		strapiQueryParams: [
			'populate[0]=logo',
			'filters[destaque][$eq]=true',
			'fields[0]=nome',
			'fields[1]=data_inicio',
			'fields[2]=data_fim',
			'sort=publishedAt:desc'
		],
		fetchOptions: {
			next: {
				revalidate: 60
			}
		}
	});

	if (error) return undefined;

	return contestsData;
}

async function getNewsData() {
	const { data: newsData, error } = await api<{ data: TNews[] }>({
		url: '/noticias',
		strapiQueryParams: [
			'filters[destaque][$eq]=true',
			'fields[0]=titulo',
			'fields[1]=publishedAt',
			'populate=imagem_noticia',
			'sort=publishedAt:desc'
		],
		fetchOptions: {
			next: {
				revalidate: 60
			}
		}
	});

	if (error) return undefined;

	return newsData;
}

async function getResultsData() {
	const { data: resultsData, error } = await api<{ data: TResult[] }>({
		url: '/resultados',
		fetchOptions: {
			next: {
				revalidate: 60
			}
		}
	});

	if (error) return undefined;

	return resultsData;
}
