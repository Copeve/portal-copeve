'use client';
import React from 'react';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

import { NewsBox } from './components/home-page/newsbox';
import { Section } from './components/home-page/section/indext';
import { Spacer } from './components/spacer';
import { ContestBox } from './components/contest-box';
import { ShowResults } from './components/count-up-display';
import { api } from '../api/api';

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

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
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
	const { data: contestsData } = await api<{ data: TContest[] }>({
		url: '/concursos',
		strapiQueryParams: [
			'populate[0]=logo',
			'filters[destaque][$eq]=true',
			'fields[0]=nome',
			'fields[1]=data_inicio',
			'fields[2]=data_fim'
		],
		fetchOptions: { cache: 'no-cache' }
	});

	const { data: newsData } = await api<{ data: TNews[] }>({
		url: '/noticias',
		strapiQueryParams: [
			'filters[destaque][$eq]=true',
			'fields[0]=titulo',
			'fields[1]=publishedAt'
		],
		fetchOptions: { cache: 'no-cache' }
	});

	const { data: resultsData } = await api<{ data: TResult[] }>({
		url: '/resultados',
		fetchOptions: { cache: 'no-cache' }
	});

	return (
		<main className="flex max-w-full flex-1 flex-col pb-20">
			<div className="max-w-full self-center">
				<Section title="Concurso Destaques">
					<ContestBox data={contestsData} type="1" />
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

				<Section title="Notícias">
					<ol className="grid grid-cols-1 gap-4 gap-y-10 mG:grid-cols-2 lg:grid-cols-2">
						{newsData.map(({ id, attributes: attrs }, index) => (
							<li key={String(id)} className="w-full">
								<NewsBox
									imageUrl={
										newsDataImage[
										index < newsDataImage.length
											? index
											: 0
										]
									}
									imgAlt="Lorem ipsum dolor sit"
									title={attrs.titulo}
									date={new Date(attrs.publishedAt)}
								/>
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

				<Spacer />
			</div>
		</main>
	);
}

const newsDataImage = [
	'https://live.staticflickr.com/7059/6990116854_1c36116afa_b.jpg',
	'https://live.staticflickr.com/7090/7171706600_4d420fdbab_b.jpg',
	'https://live.staticflickr.com/7099/7136201181_73d3a8926d_3k.jpg',
	'https://live.staticflickr.com/7101/6990120534_03ec7c28cb_b.jpg'
];
