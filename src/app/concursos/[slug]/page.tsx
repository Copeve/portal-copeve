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
import { ArrowUpRight } from '../../components/Icons';
import { api } from '../../../api/api';
import { LinksDocList, FileIcon } from './LinksDocList';
import { PeriodStates } from './PeriodStates';
import { Section } from '../../components/home-page/section/indext';
import {
	TContest,
	TContestEvent,
	TContestFileData,
	TContestNews
} from '../../../dto/contest-details.dto';
import { CalendarNumber } from '../../components/calendar-day';
import {
	groupByPublishedDate,
	groupFiles,
	groupByPropDate
} from '../../../utils/group-by';
import { sortByDate } from '../../../utils/sort-by';
import { EmptySectionMessage } from './EmptySectionMessage';
import { RawToMarkdown } from '../../components/react-markdown';
import ScrollToTop from '../../components/scroll-to-top';
import { firstLetterCapital } from '../../../utils/string-format';

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

	const groupedFiles = groupFiles(contestFiles);
	const groupedNews = groupByPublishedDate(contestNews);
	const groupedNewsSortedKeys = Object.keys(groupedNews).sort((a, b) =>
		sortByDate(new Date(`${a}-15`), new Date(`${b}-15`))
	);
	const groupedEvents = groupByPropDate(contestEvents);
	const groupedEventsSortedKeys = Object.keys(groupedEvents).sort((a, b) =>
		sortByDate(new Date(`${a}-15`), new Date(`${b}-15`), 'asc')
	);

	return (
		<main className="mx-auto w-full max-w-web">
			<ScrollToTop />
			<PageTitle title={contestsData.attributes.nome} className="mb-14" />

			<PeriodStates
				period={{
					startDate: contestsData.attributes.data_inicio,
					endDate: contestsData.attributes.data_fim
				}}
			/>

			{contestsData.attributes.link_area_candidato && (
				<div className="flex items-center gap-4 pl-[3px]">
					<ArrowUpRight className="h-[26px] w-[26px] rounded-full border-2 border-title_blue stroke-title_blue" />{' '}
					<Link
						href={contestsData.attributes.link_area_candidato}
						target="_blank"
						className="text-xl underline underline-offset-2 hover:text-title_blue"
					>
						Área do Candidato
					</Link>
				</div>
			)}

			{contestsData.attributes.link_incricao && (
				<div className="mt-6 flex items-center gap-4 pl-[3px]">
					<ArrowUpRight className="h-[26px] w-[26px] rounded-full border-2 border-title_blue stroke-title_blue" />{' '}
					<Link
						href={contestsData.attributes.link_incricao}
						target="_blank"
						className="text-xl underline underline-offset-2 hover:text-title_blue"
					>
						Inscrição
					</Link>
				</div>
			)}

			<Spacer />

			<Section
				title="Arquivos deste Concurso"
				titleClassName="text-2xl text-gray_text mb-4"
			>
				{groupedFiles.length === 0 ? (
					<EmptySectionMessage sectionLabel={'arquivos'} />
				) : (
					<Accordion
						type="single"
						collapsible
						defaultValue={
							groupedFiles[0].tipo_arquivo.data.attributes.nome
						}
					>
						{groupedFiles.map(({ tipo_arquivo, arquivos }) => {
							const { id, attributes: tipo } = tipo_arquivo.data;

							return (
								<AccordionItem
									key={String(id)}
									value={`${tipo.nome}`}
								>
									<AccordionTrigger>
										{tipo.nome}
									</AccordionTrigger>
									<AccordionContent>
										<LinksDocList>
											{arquivos.map(
												({ data: file, titulo }) => {
													return (
														<Link
															key={`comunicado-${file.id}`}
															href={`${process.env.NEXT_PUBLIC_API_URL}${file.attributes.url}`}
															target="_blank"
															prefetch={false}
														>
															<FileIcon
																mime={
																	file
																		.attributes
																		.ext
																}
															/>
															{titulo}
														</Link>
													);
												}
											)}
										</LinksDocList>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				)}
			</Section>

			<Section
				title="Notícias"
				className="relative mt-8"
				titleClassName="text-2xl text-gray_text mb-4"
			>
				<div id={'noticias'} className="absolute -top-28 h-2 w-2" />
				{groupedNewsSortedKeys.length === 0 ? (
					<EmptySectionMessage sectionLabel={'notícias'} />
				) : (
					<Accordion
						type="single"
						collapsible
						defaultValue={groupedNewsSortedKeys[0]}
					>
						{groupedNewsSortedKeys.map((key) => {
							const news = groupedNews[key];

							const title = format(
								new Date(`${key}-15`),
								"LLLL 'de' yyyy",
								{
									locale: ptBR
								}
							);

							const titleFirstCapital = firstLetterCapital(title);

							return (
								<AccordionItem key={key} value={key}>
									<AccordionTrigger>
										{titleFirstCapital}
									</AccordionTrigger>
									<AccordionContent>
										<LinksDocList>
											{news.map(({ id, attributes }) => {
												return (
													<Link
														key={`news-${id}`}
														href={`/noticias/${id}`}
														prefetch={false}
													>
														<CalendarNumber
															day={attributes.publishedAt.substring(
																8,
																10
															)}
														/>

														{attributes.titulo}
													</Link>
												);
											})}
										</LinksDocList>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				)}
			</Section>

			<Section
				title="Eventos"
				className="relative mt-8"
				titleClassName="text-2xl text-gray_text mb-4"
			>
				<div id={'eventos'} className="absolute -top-28 h-2 w-2" />
				{groupedEventsSortedKeys.length === 0 ? (
					<EmptySectionMessage sectionLabel={'eventos'} />
				) : (
					<Accordion
						type="single"
						collapsible
						defaultValue={groupedEventsSortedKeys[0]}
					>
						{groupedEventsSortedKeys.map((key) => {
							let events = groupedEvents[key];

							events = events.sort((a, b) =>
								sortByDate(
									new Date(a.attributes.data),
									new Date(b.attributes.data),
									'asc'
								)
							);

							const title = format(
								new Date(`${key}-15`),
								"LLLL 'de' yyyy",
								{
									locale: ptBR
								}
							);

							return (
								<AccordionItem key={key} value={key}>
									<AccordionTrigger>
										{firstLetterCapital(title)}
									</AccordionTrigger>
									<AccordionContent>
										<LinksDocList childrenClassName="hover:no-underline hover:cursor-default hover:brightness-100 border-b pb-4 gap-4">
											{events.map(
												({ id, attributes }) => {
													return (
														<div
															key={`event-${id}`}
														>
															<CalendarNumber
																day={attributes.data.substring(
																	8,
																	10
																)}
															/>

															<div className="h-8 min-w-[2px] bg-title_blue dark:bg-white"></div>

															<div>
																<h3 className="text-lg font-semibold">
																	{firstLetterCapital(
																		attributes
																			.tipo_calendario
																			.data
																			.attributes
																			.nome
																	)}
																</h3>
																<RawToMarkdown
																	text={
																		attributes.observacao
																	}
																	className="text-sm"
																/>
															</div>
														</div>
													);
												}
											)}
										</LinksDocList>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				)}
			</Section>

			<Spacer />
			<Spacer />
		</main>
	);
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
