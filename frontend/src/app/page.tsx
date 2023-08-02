'use client';
import React from 'react';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { LuNewspaper, LuFiles } from 'react-icons/lu';
import {
	MdMiscellaneousServices,
	MdOutlineDashboardCustomize
} from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import CountUp from 'react-countup';

import { NewsBox } from './components/home-page/newsbox';
import { Section } from './components/home-page/section/indext';
import { Spacer } from './components/spacer';
import { GalleryButton } from './components/home-page/gallery-button';
import { ContestsHighlight } from './components/contests-highlight';

export default function Home() {
	return (
		<main className="flex flex-1 flex-col pb-20 max-w-full">
			<div className="max-w-full self-center">
				<Section title="Concurso Destaques">
					<ContestsHighlight />
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
										'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eveniet corporis consequatur ipsum magnam, veritatis ea quas fuga necessitatibus, nostrum aliquid explicabo suscipit? Ducimus unde veritatis maxime omnis ullam eos.'
									}
									date={new Date('2023-07-18')}
								/>
							</li>
						))}
					</ol>

					<Link
						href="/noticias"
						prefetch={false}
						className="ml-auto mt-4 flex w-max items-center justify-center text-lg font-bold text-title_blue dark:text-white"
					>
						Ver todas as notícias{' '}
						<HiChevronRight className="h-6 w-6 fill-yellow_1 pt-px" />
					</Link>
				</Section>

				<Spacer />

				<Section title="Resultados">
					<div className='flex justify-between py-16'>
						<ShowResults end={81} title='Concursos Abertos' />
						<ShowResults end={20050} title='Concursos Concluídos' />
						<ShowResults end={489} title='Concursos Cancelado' />
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
}

function ShowResults({ end, duration = 8, title }: ShowResultsProps) {
	return (
		<div className='flex flex-col items-center justify-center gap-6'>
			<h3 className='text-xl text-center' >{title}</h3>
			<CountUp
				end={end}
				duration={duration}
				enableScrollSpy
				scrollSpyOnce
				className='text-5xl font-semibold text-title_blue drop-shadow-2xl'
			/>
		</div>
	)
}

const newsDataImage = [
	'https://live.staticflickr.com/7059/6990116854_1c36116afa_b.jpg',
	'https://live.staticflickr.com/7090/7171706600_4d420fdbab_b.jpg',
	'https://live.staticflickr.com/7099/7136201181_73d3a8926d_3k.jpg',
	'https://live.staticflickr.com/7101/6990120534_03ec7c28cb_b.jpg'
]