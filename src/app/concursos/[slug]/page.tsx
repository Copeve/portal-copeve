import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
import { Section } from '../../components/home-page/section/indext';

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

type TContestNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
	};
};

type TContestEvent = {
	id: number;
	attributes: {
		data: string;
		observacao: string | null;
		publishedAt: string;
		tipo_calendario: {
			data: {
				id: number;
				attributes: {
					nome: string;
					descricao: string | null;
				};
			};
		};
	};
};

type TContestFileData = {
	id: number;
	attributes: {
		observacao: string | null;
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
		observacao: string | null;
		titulo: string;
	})[];
};

type Props = {
	params: { slug: string };
};

export default async function DetalhesConcursos({ params }: Props) {
	const data = await Promise.all([
		getContestData(params.slug),
		getContestFiles(params.slug),
		getContestNews(params.slug),
		getContestEvents(params.slug)
	]);

	const [contestsData, contestFiles, contestNews, contestEvents] = data;

	const groupedFiles: TContestGroupedFiles[] = groupFiles(contestFiles);
	const groupedNews = groupByDate(contestNews);
	const groupedEvents = groupByDate(contestEvents);

	return (
		<main className="mx-auto w-full max-w-web">
			<PageTitle title={contestsData.attributes.nome} className="mb-14" />

			<PeriodStates
				period={{
					startDate: contestsData.attributes.data_inicio,
					endDate: contestsData.attributes.data_fim
				}}
			/>

			<div className="mb-14 flex items-center gap-4 pl-[3px]">
				<ArrowUpRight className="h-[26px] w-[26px] rounded-full border-2 border-title_blue stroke-title_blue" />{' '}
				<Link
					href={contestsData.attributes.link_area_candidato || '/404'}
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
					&& groupedFiles[0].tipo_arquivo.data.attributes.nome
				}
			>
				{groupedFiles.map(({ tipo_arquivo, arquivos }) => {
					const { id, attributes: tipo } = tipo_arquivo.data;

					return (
						<AccordionItem key={String(id)} value={`${tipo.nome}`}>
							<AccordionTrigger>{tipo.nome}</AccordionTrigger>
							<AccordionContent>
								<DownloadableDocList>
									{arquivos.map(({ data: file, titulo }) => {
										return (
											<Link
												key={`comunicado-${file.id}`}
												href={`${process.env.NEXT_PUBLIC_API_URL}${file.attributes.url}`}
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

			<Section
				title="Notícias"
				titleClassName="text-2xl text-gray_text mb-4"
			>
				<Accordion type="single" collapsible defaultValue="Notícias">
					{Object.keys(groupedNews).map((key) => {
						const news = groupedNews[key];

						const title = format(
							new Date(`${key}-15`),
							"LLLL 'de' yyyy",
							{
								locale: ptBR
							}
						);

						const titleFistCapital
							= title.at(0).toUpperCase() + title.substring(1);

						return (
							<AccordionItem key={key} value={key}>
								<AccordionTrigger>
									{titleFistCapital}
								</AccordionTrigger>
								<AccordionContent>
									<DownloadableDocList>
										{news.map(({ id, attributes }) => {
											return (
												<Link
													key={`news-${id}`}
													href={`/noticias/${id}`}
													prefetch={false}
												>
													<FileIcon mime={'news'} />

													{attributes.titulo}
												</Link>
											);
										})}
									</DownloadableDocList>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</Section>

			<Section
				title="Eventos"
				className="mt-8"
				titleClassName="text-2xl text-gray_text mb-4"
			>
				<Accordion type="single" collapsible defaultValue="">
					{Object.keys(groupedEvents).map((key) => {
						const news = groupedEvents[key];

						const title = format(
							new Date(`${key}-15`),
							"LLLL 'de' yyyy",
							{
								locale: ptBR
							}
						);

						const titleFistCapital
							= title.at(0).toUpperCase() + title.substring(1);

						return (
							<AccordionItem key={key} value={key}>
								<AccordionTrigger>
									{titleFistCapital}
								</AccordionTrigger>
								<AccordionContent>
									<DownloadableDocList>
										{news.map(({ id, attributes }) => {
											return (
												<Link
													key={`event-${id}`}
													href={'#'}
													prefetch={false}
												>
													<FileIcon mime={'news'} />

													{attributes.observacao}
												</Link>
											);
										})}
									</DownloadableDocList>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</Section>

			<Spacer />
			<Spacer />
		</main>
	);
}

function FileIcon({ mime }: { mime: string }) {
	if (mime === '.pdf') {
		return (
			<OutlineFilePdf className="h-8 min-h-[32px] w-8 min-w-[32px] fill-yellow_1" />
		);
	}

	return (
		<OutlineLink className="h-8 min-h-[32px] w-8 min-w-[32px] fill-yellow_1" />
	);
}

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
				titulo: file.attributes.titulo,
				observacao: file.attributes.observacao
			});
		} else {
			newDataStructure.push({
				tipo_arquivo: file.attributes.tipo_arquivo,
				arquivos: [
					{
						...file.attributes.arquivo,
						titulo: file.attributes.titulo,
						observacao: file.attributes.observacao
					}
				]
			});
		}
	});

	return newDataStructure;
}

function groupByDate<T extends { attributes: { publishedAt: string } }>(
	data: T[]
) {
	const grouped: Record<string, T[]> = {};

	data.forEach((item) => {
		const key = item.attributes.publishedAt.substring(0, 7);

		if (grouped[key]) {
			grouped[key].push(item);
		} else {
			grouped[key] = [item];
		}
	});

	return grouped;
}

async function getContestData(id: string) {
	const { data, error } = await api<{ data: TContest }>({
		url: `/concursos/${id}`,
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		if (error.status === 404) return notFound();
		throw new Error(error.message);
	}

	return data;
}

async function getContestFiles(contestId: string) {
	const { data, error } = await api<{ data: TContestFileData[] }>({
		url: '/arquivo-concursos',
		strapiQueryParams: [
			'populate[tipo_arquivo][fields][0]=nome',
			'populate[arquivo][fields][0]=name',
			'populate[arquivo][fields][1]=alternativeText',
			'populate[arquivo][fields][2]=ext',
			'populate[arquivo][fields][3]=mime',
			'populate[arquivo][fields][4]=url',
			'sort=publishedAt:desc',
			`filters[concurso][id][$eq]=${contestId}`
		],
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		throw new Error(error.message);
	}

	return data;
}

async function getContestNews(contestId: string) {
	const { data, error } = await api<{
		data: TContestNews[];
	}>({
		url: '/noticias',
		strapiQueryParams: [
			'fields[0]=titulo',
			'sort=publishedAt:desc',
			`filters[concurso][id][$eq]=${contestId}`
		],
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		throw new Error(error.message);
	}

	return data;
}

async function getContestEvents(contestId: string) {
	const { data, error } = await api<{
		data: TContestEvent[];
	}>({
		url: '/calendarios',
		strapiQueryParams: [
			'populate=tipo_calendario',
			'sort=publishedAt:desc',
			`filters[concurso][id][$eq]=${contestId}`
		],
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		throw new Error(error.message);
	}

	return data;
}
