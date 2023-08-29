import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { PeriodStates } from '../../concursos/[slug]/PeriodStates';
import { ArrowDropright, ArrowUpRight, FileText, Newspaper } from '../Icons';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../accordion';
import { TContest } from '../../concursos/page';

type Props = {
	type: '1' | '2';
	data: TContest[];
	defaultValue?: string;
};

const ContestBox = ({
	type,
	data,
	defaultValue
}: Props): React.ReactElement => {
	if (type === '1') {
		return (
			<ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{data.map(({ id, attributes: attrs }) => (
					<li
						key={`item-${id}`}
						className="group flex flex-col rounded border border-title_blue p-4 pb-10"
					>
						<div className="flex w-full flex-1 flex-col items-center gap-4 pb-4">
							<div className="flex h-52 w-full items-center justify-center overflow-hidden rounded bg-slate-200">
								{attrs.logo.data ? (
									<div className="flex h-full w-full items-center justify-center">
										<Image
											width={208}
											height={208}
											alt={
												attrs.logo.data?.textoAlt ??
												`Imagem representativa do concurso ${attrs.nome}`
											}
											src={attrs.logo.data?.link}
											className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
										/>
									</div>
								) : (
									<FileText className="h-24 w-24 opacity-30 transition-transform duration-[400ms] group-hover:scale-105 dark:fill-gray_text" />
								)}
							</div>

							<h3 className="line-clamp-2 self-start text-left text-xl font-semibold leading-7">
								{attrs.nome}
							</h3>
						</div>

						<div className="mt-6 pl-2">
							<div className="flex gap-2">
								<ArrowDropright className="mt-1 h-8 w-8 fill-title_blue" />
								<div>
									<h2 className="flex gap-1 text-lg">
										Período de inscrição
									</h2>
									{attrs.data_inicio ? (
										<strong
											className={'text-sm font-semibold'}
										>
											{format(
												new Date(attrs.data_inicio),
												'dd/MM/yyyy'
											)}{' '}
											-{' '}
											{attrs.data_fim
												? format(
													new Date(
														attrs.data_fim
													),
													'dd/MM/yyyy'
												)
												: 'Data fim não definida'}
										</strong>
									) : (
										<span
											className={'text-md text-red-500'}
										>
											{
												'Período de inscrições não definido'
											}
										</span>
									)}
								</div>
							</div>

							<div className="mt-3 flex items-center gap-2">
								<Newspaper
									className="h-8 w-8 fill-title_blue"
									style={{ strokeWidth: 2 }}
								/>
								<Link
									href={'concursos/1'}
									as={`concursos/${attrs.nome
										.replaceAll(' ', '_')
										.toLocaleLowerCase()}`}
									prefetch={false}
									className="text-lg underline underline-offset-2 hover:text-title_blue"
								>
									Notícias
								</Link>
							</div>

							<div className="mt-3 flex items-center gap-2">
								<ArrowUpRight className="h-8 w-8 stroke-title_blue" />
								<Link
									href={`concursos/${id}`}
									// as={`concursos/${attrs.nome
									// 	.replaceAll('/', '_')
									// 	.replaceAll(' ', '_')
									// 	.toLocaleLowerCase()}`}
									prefetch={false}
									className="text-lg underline underline-offset-2 hover:text-title_blue"
								>
									Detalhes
								</Link>
							</div>
						</div>
					</li>
				))}
			</ol>
		);
	}

	return (
		<Accordion type="single" defaultValue={defaultValue} collapsible>
			{data.map(({ id, attributes: attrs }) => (
				<AccordionItem
					key={`item-${id}`}
					value={`item-${id}`}
					className="group rounded border border-title_blue"
				>
					<AccordionTrigger className="p-4 text-left leading-7 hover:brightness-100">
						<div className="flex w-full gap-4">
							<div className="flex h-36 w-60 min-w-[240px] items-center justify-center overflow-hidden rounded bg-slate-200">
								{attrs.logo.data ? (
									<Image
										width={200}
										height={144}
										className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
										src={attrs.logo.data?.link}
										alt={attrs.logo.data?.textoAlt}
									/>
								) : (
									<FileText className="h-24 w-24 opacity-30 transition-transform duration-[400ms] group-hover:scale-105 dark:fill-gray_text" />
								)}
							</div>

							<h3 className="line-clamp-3">{attrs.nome}</h3>
						</div>
					</AccordionTrigger>
					<AccordionContent className="pb-6">
						<PeriodStates
							period={{
								startDate: attrs.data_inicio,
								endDate: attrs.data_fim
							}}
							className="mb-2"
							textClassName="text-lg"
						/>

						<div className="flex items-center gap-4">
							<Newspaper
								className="h-8 w-8 fill-title_blue"
								style={{ strokeWidth: 2 }}
							/>
							<Link
								href={'/noticias'}
								// as={`concursos/${attrs.nome
								// 	.replaceAll(' ', '_')
								// 	.toLocaleLowerCase()}`}
								prefetch={false}
								className="text-lg underline underline-offset-2 hover:text-title_blue"
							>
								Notícias
							</Link>
						</div>

						<div className="mt-2 flex items-center gap-4">
							<ArrowUpRight className="h-8 w-8 stroke-title_blue" />{' '}
							<Link
								href={`concursos/${id}`}
								as={`concursos/${attrs.nome
									.replaceAll(' ', '_')
									.replaceAll('/', '_')
									.toLocaleLowerCase()}`}
								prefetch={false}
								className="text-lg underline underline-offset-2 hover:text-title_blue"
							>
								Detalhes
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export { ContestBox };
