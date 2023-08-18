'use client';
import React from 'react';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';
import CountUp from 'react-countup';

import { NewsBox } from './components/home-page/newsbox';
import { Section } from './components/home-page/section/indext';
import { Spacer } from './components/spacer';
import { twMerge } from 'tailwind-merge';
import { ContestBox, TContests } from './components/contest-box';
import { addHours } from 'date-fns';

const contestsData: TContests[] = [
	{
		titulo: 'Processo Seletivo Técnico em Linguagem de Sinais',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://live.staticflickr.com/7099/7136201181_73d3a8926d_3k.jpg'
	},
	{
		titulo: 'Lorem ipsum - dolor sit (amet), consecteturadipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://live.staticflickr.com/7059/6990116854_1c36116afa_b.jpg',
		imagemAlt: 'Imagem do concurso'
	},
	{
		titulo: 'Colégio Técnico 2024 - Cursos Subsequentes',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://live.staticflickr.com/7101/6990120534_03ec7c28cb_b.jpg'
	},
	{
		titulo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla velit repellat atque quod, totam minima fuga consequatur officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla velit repellat atque quod, totam minima fuga consequatur officiis!',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		}
	}
];

export default function Home() {
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
						{new Array(4).fill('').map((_, index) => (
							<li key={String(index)} className="w-full">
								<NewsBox
									imageUrl={newsDataImage[index]}
									imgAlt="Lorem ipsum dolor sit"
									title={
										'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eveniet corporis consequatur ipsum magnam.'
									}
									date={new Date('2023-07-18')}
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
						<ShowResults
							className="flex-1"
							end={81}
							title="Concursos Abertos"
						/>
						<ShowResults
							className="flex-1"
							end={20050}
							title="Concursos Concluídos"
						/>
						<ShowResults
							className="flex-1"
							end={489}
							title="Concursos Cancelado"
						/>
					</div>
				</Section>

				<Spacer />
			</div>
		</main>
	);
}

type ShowResultsProps = {
	end: number;
	duration?: number;
	title?: string;
	className?: string;
};

function ShowResults({
	end,
	duration = 8,
	title,
	className
}: ShowResultsProps) {
	return (
		<div
			className={twMerge(
				'flex flex-col items-center justify-center gap-6',
				className
			)}
		>
			<h3 className="text-center text-xl">{title}</h3>
			<CountUp
				end={end}
				duration={duration}
				enableScrollSpy
				scrollSpyOnce
				className="text-5xl font-semibold text-title_blue drop-shadow-2xl"
			/>
		</div>
	);
}

const newsDataImage = [
	'https://live.staticflickr.com/7059/6990116854_1c36116afa_b.jpg',
	'https://live.staticflickr.com/7090/7171706600_4d420fdbab_b.jpg',
	'https://live.staticflickr.com/7099/7136201181_73d3a8926d_3k.jpg',
	'https://live.staticflickr.com/7101/6990120534_03ec7c28cb_b.jpg'
];
