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

				<Section title="Galeria">
					<ul className="pt-4 grid grid-cols-2 gap-x-2 gap-y-8 mG:grid-cols-3">
						<li>
							<GalleryButton href="/" title="Departamentos">
								<MdOutlineDashboardCustomize />
							</GalleryButton>
						</li>
						<li>
							<GalleryButton
								href="/"
								title="Editais"
								color="stroke"
							>
								<LuNewspaper />
							</GalleryButton>
						</li>
						<li>
							<GalleryButton href="/" title="Serviços">
								<MdMiscellaneousServices />
							</GalleryButton>
						</li>
						<li>
							<GalleryButton
								href="/"
								title="Manuais"
								color="stroke"
							>
								<LuFiles />
							</GalleryButton>
						</li>
						<li>
							<GalleryButton
								href="/"
								title="Transparência"
								color="stroke"
							>
								<HiOutlineDocumentChartBar />
							</GalleryButton>
						</li>
						<li>
							<GalleryButton href="/" title="Formulários">
								<AiOutlineForm />
							</GalleryButton>
						</li>
					</ul>
				</Section>

				<Spacer />

				<Section title="Notícias">
					<ol className="grid grid-cols-1 gap-4 mG:grid-cols-2 lg:grid-cols-2">
						{new Array(4).fill('').map((_, index) => (
							<li key={String(index)} className="w-full">
								<NewsBox
									imageUrl="/banner.jpg"
									imgAlt="Lorem ipsum dolor sit"
									title={
										index % 2 === 0
											? 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eveniet corporis consequatur ipsum magnam, veritatis ea quas fuga necessitatibus, nostrum aliquid explicabo suscipit? Ducimus unde veritatis maxime omnis ullam eos.'
											: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
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