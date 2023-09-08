import React from 'react';
import Link from 'next/link';

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
import { api } from '../../../api/api';

type TContest = {
	id: number;
	attributes: {
		nome: string;
		ano: number;
		data_inicio: string;
		data_fim: string;
		encerrado: boolean;
		link_incricao: string | null;
		destaque: boolean;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		link: string | null;
		link_area_candidato: string | null;
		logo: {
			data: {
				textoAlt?: string;
				link?: string;
			} | null;
		};
	};
};

type TContestFileData = {
	id: number;
	attributes: {
		observacao: string;
		titulo: string;
		tipo_arquivo: {
			data: {
				id: number;
				attributes: {
					nome: string;
				};
			};
		};
		arquivo: {
			data: {
				id: number;
				attributes: {
					name: string;
					alternativeText: string | null;
					ext: string;
					mime: string;
					url: string;
				};
			};
		};
	};
};

type TContestGroupedFiles = {
	tipo_arquivo: TContestFileData['attributes']['tipo_arquivo'];
	arquivos: (TContestFileData['attributes']['arquivo'] & {
		titulo: string;
	})[];
};

type Props = {
	params: { slug: string };
};

function groupFiles(data: TContestFileData[]): TContestGroupedFiles[] {
	const newDataStructure: TContestGroupedFiles[] = [];

	data.forEach((file) => {
		const hasGroupIndex = newDataStructure.findIndex(
			(e) =>
				e.tipo_arquivo.data.id === file.attributes.tipo_arquivo.data.id
		);

		if (hasGroupIndex !== -1) {
			newDataStructure[hasGroupIndex].arquivos.push({
				...file.attributes.arquivo,
				titulo: file.attributes.titulo
			});
		} else {
			newDataStructure.push({
				tipo_arquivo: file.attributes.tipo_arquivo,
				arquivos: [
					{
						...file.attributes.arquivo,
						titulo: file.attributes.titulo
					}
				]
			});
		}
	});

	return newDataStructure;
}

export default async function DetalhesConcursos({ params }: Props) {
	const { attributes: contestsData } = (
		await api<{ data: TContest }>({
			url: `/concursos/${params.slug}`,
			fetchOptions: {
				cache: 'no-cache'
			}
		})
	).data;

	const { data: contestFiles } = await api<{ data: TContestFileData[] }>({
		url: '/arquivo-concursos',
		strapiQueryParams: [
			'populate[tipo_arquivo][fields][0]=nome',
			'populate[arquivo][fields][0]=name',
			'populate[arquivo][fields][1]=alternativeText',
			'populate[arquivo][fields][2]=ext',
			'populate[arquivo][fields][3]=mime',
			'populate[arquivo][fields][4]=url',
			`filters[concurso][id][$eq]=${params.slug}`
		],
		fetchOptions: {
			cache: 'no-cache'
		}
	});

	const groupedFiles: TContestGroupedFiles[] = groupFiles(contestFiles);

	return (
		<main className="mx-auto w-full max-w-web">
			<PageTitle title={contestsData.nome} className="mb-14" />

			<PeriodStates
				period={{
					startDate: contestsData.data_inicio,
					endDate: contestsData.data_fim
				}}
			/>

			<div className="mb-14 flex items-center gap-4 pl-[3px]">
				<ArrowUpRight className="h-[26px] w-[26px] rounded-full border-2 border-title_blue stroke-title_blue" />{' '}
				<Link
					href={contestsData.link_area_candidato || '/404'}
					target="_blank"
					className="text-xl underline underline-offset-2 hover:text-title_blue"
				>
					Área do Candidato
				</Link>
			</div>

			<Accordion
				type="single"
				collapsible
				defaultValue={
					groupedFiles[0]
					&& String(groupedFiles[0].tipo_arquivo.data.id)
				}
			>
				{groupedFiles.map(({ tipo_arquivo, arquivos }) => {
					const { id, attributes: tipo } = tipo_arquivo.data;

					return (
						<AccordionItem key={String(id)} value={String(id)}>
							<AccordionTrigger>{tipo.nome}</AccordionTrigger>
							<AccordionContent>
								<DownloadableDocList>
									{arquivos.map(({ data: file, titulo }) => {
										return (
											<Link
												key={`comunicado-${file.id}`}
												href={`${process.env.API_URL}${file.attributes.url}`}
												target="_blank"
												prefetch={false}
											>
												<FileIcon
													mime={file.attributes.mime}
												/>

												{titulo}
											</Link>
										);
									})}
								</DownloadableDocList>
							</AccordionContent>
						</AccordionItem>
					);
				})}
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

			<Spacer />
		</main>
	);
}

function FileIcon({ mime }: { mime: string }) {
	if (mime === '.pdf') {
		return <OutlineFilePdf className="h-8 w-8 fill-yellow_1" />;
	}

	return <OutlineLink className="h-8 w-8 fill-yellow_1" />;
}
