'use client';
import React from 'react';
import Link from 'next/link';
import { addHours } from 'date-fns';

import { TwitterButton } from '../../components/social-medias/twitter';
import { FacebookButton } from '../../components/social-medias/facebook';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../../components/accordion';
import { Spacer } from '../../components/spacer';
import { PageTitle } from '../../components/page-title';
import {
	ArrowUpRight,
	OutlineFilePdf,
	OutlineLink
} from '../../components/Icons';
import { DownloadableDocList } from './DownloadableDocList';
import { PeriodStates } from './PeriodStates';
import { TContests } from '../../components/contest-box';

type Props = {
	params: { slug: string };
};

export default function DetalhesConcursos({ params }: Props) {
	console.log(params);

	const contestsData: TContests = {
		titulo: 'Processo Seletivo Técnico em Linguagem de Sinais',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		comunicados: [
			{
				id: '1',
				title: 'Comunicado - Alteração no local de prova (publicado em 28/07/2023 às 12:06)',
				link: '#',
				tipo: '.pdf'
			},
			{
				id: '2',
				title: 'Comunicado - Alteração no local de prova (publicado em 28/07/2023 às 12:06)',
				link: '#',
				tipo: '.pdf'
			}
		],
		documentos: [
			{
				id: '1',
				title: 'Resultado do Processo de Isenção (publicado em 11/07/2023 às 21:22)',
				link: '#',
				tipo: '.pdf'
			},
			{
				id: '2',
				title: 'Comunicado - Alteração no local de prova (publicado em 28/07/2023 às 12:06)',
				link: '#',
				tipo: '.pdf'
			}
		],
		inscricoes: [
			{
				id: '1',
				title: 'Comprovante definitivo de inscrição (publicado em 01/08/2023 às 15:25)',
				link: '#',
				tipo: 'link'
			},
			{
				id: '2',
				title: 'Homologação das Inscrições (publicado em 28/07/2023 às 12:06)',
				link: '#',
				tipo: '.pdf'
			},
			{
				id: '3',
				title: 'Resultado do Processo de Isenção (publicado em 11/07/2023 às 21:22)',
				link: '#',
				tipo: '.pdf'
			}
		],
		faq: '#',
		eventos: '#',
		noticias: '#'
	};

	return (
		<main className="mx-auto w-full max-w-web">
			<PageTitle title={contestsData.titulo} className="mb-14" />

			<PeriodStates period={contestsData.periodoInscricao} />

			<div className="mb-14 flex items-center gap-4 pl-[3px]">
				<ArrowUpRight className="h-[26px] w-[26px] rounded-full border-2 border-title_blue stroke-title_blue" />{' '}
				<Link
					href={'/'}
					className="text-xl underline underline-offset-2 hover:text-title_blue"
				>
					Área do Candidato
				</Link>
			</div>

			<Accordion type="single" collapsible defaultValue="comunicados">
				{contestsData.comunicados && (
					<AccordionItem value="comunicados">
						<AccordionTrigger>Comunicados</AccordionTrigger>
						<AccordionContent>
							<DownloadableDocList>
								{contestsData.comunicados.map((item) => (
									<Link
										key={`comunicado-${item.id}`}
										href={item.link}
										prefetch={false}
									>
										{item.tipo === '.pdf' ? (
											<OutlineFilePdf className="h-8 w-8 fill-yellow_1" />
										) : (
											<OutlineLink className="h-8 w-8 fill-yellow_1" />
										)}
										{item.title}
									</Link>
								))}
							</DownloadableDocList>
						</AccordionContent>
					</AccordionItem>
				)}

				{contestsData.documentos && (
					<AccordionItem value="documentos">
						<AccordionTrigger>
							Documentos e Editais
						</AccordionTrigger>
						<AccordionContent className="pb-4">
							<DownloadableDocList>
								{contestsData.documentos.map((item) => (
									<Link
										key={`documentos-${item.id}`}
										href={item.link}
										prefetch={false}
									>
										{item.tipo === '.pdf' ? (
											<OutlineFilePdf className="h-8 w-8 fill-yellow_1" />
										) : (
											<OutlineLink className="h-8 w-8 fill-yellow_1" />
										)}
										{item.title}
									</Link>
								))}
							</DownloadableDocList>
						</AccordionContent>
					</AccordionItem>
				)}

				{contestsData.estatisticas && (
					<AccordionItem value="item-3">
						<AccordionTrigger>Estatísticas</AccordionTrigger>
						<AccordionContent>
							Yes! You can animate the Accordion with CSS or
							JavaScript.
						</AccordionContent>
					</AccordionItem>
				)}

				{contestsData.gabaritos && (
					<AccordionItem value="item-4">
						<AccordionTrigger>Gabaritos</AccordionTrigger>
						<AccordionContent>
							Yes! You can animate the Accordion with CSS or
							JavaScript.
						</AccordionContent>
					</AccordionItem>
				)}

				{contestsData.inscricoes && (
					<AccordionItem value="item-5">
						<AccordionTrigger>Inscrições</AccordionTrigger>
						<AccordionContent className="pb-4">
							<DownloadableDocList>
								{contestsData.inscricoes.map((item) => (
									<Link
										key={`inscricoes-${item.id}`}
										href={item.link}
										prefetch={false}
									>
										{item.tipo === '.pdf' ? (
											<OutlineFilePdf className="h-8 w-8 fill-yellow_1" />
										) : (
											<OutlineLink className="h-8 w-8 fill-yellow_1" />
										)}
										{item.title}
									</Link>
								))}
							</DownloadableDocList>
						</AccordionContent>
					</AccordionItem>
				)}

				{contestsData.resultados && (
					<AccordionItem value="item-6">
						<AccordionTrigger>Resultados</AccordionTrigger>
						<AccordionContent>
							Yes! You can animate the Accordion with CSS or
							JavaScript.
						</AccordionContent>
					</AccordionItem>
				)}

				{contestsData.textosELivrosIndicados && (
					<AccordionItem value="item-7">
						<AccordionTrigger>
							Textos e Livros Indicados
						</AccordionTrigger>
						<AccordionContent>
							Yes! You can animate the Accordion with CSS or
							JavaScript.
						</AccordionContent>
					</AccordionItem>
				)}
			</Accordion>

			<Spacer />

			<div className="mb-18 flex flex-col gap-6 text-xl mG:flex-row">
				{contestsData?.faq && (
					<Link
						href={contestsData.faq}
						className="flex-1 border-2 border-title_blue px-4 py-8 text-center align-middle font-medium transition-colors duration-300 hover:bg-title_blue hover:text-white"
					>
						Perguntas Frequentes
					</Link>
				)}
				{contestsData?.eventos && (
					<Link
						href={contestsData.eventos}
						className="flex-1 border-2 border-title_blue px-4 py-8 text-center align-middle font-medium transition-colors duration-300 hover:bg-title_blue hover:text-white"
					>
						Eventos do Concurso
					</Link>
				)}
				{contestsData?.noticias && (
					<Link
						href={contestsData.noticias}
						className="flex-1 border-2 border-title_blue px-4 py-8 text-center align-middle font-medium transition-colors duration-300 hover:bg-title_blue hover:text-white"
					>
						Últimas Notícias
					</Link>
				)}
			</div>

			<div className="mt-16 flex justify-end gap-2 md:justify-start">
				<TwitterButton
					className="flex gap-4 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
				<FacebookButton
					className="flex gap-4 border-icon_blue dark:border-white"
					iconColor="fill-icon_blue dark:fill-white"
				/>
			</div>

			<Spacer />
		</main>
	);
}
