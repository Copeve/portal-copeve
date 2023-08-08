'use client';
import { PageTitle } from "../components/page-title";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../components/accordion';
import { PeriodStates } from "./[slug]/PeriodStates";
import { addHours, format } from "date-fns";
import { ArrowDropright, ArrowUpRight, FileText, Newspaper } from "../components/Icons";
import Link from "next/link";
import Image from "next/image";
import { Spacer } from "../components/spacer";

type TContestsProp = {
	id: string;
	title: string;
	link: string;
	tipo: string;
};

export type TContests = {
	titulo: string;
	periodoInscricao?: {
		inicio: Date;
		fim?: Date;
	},
	imagem?: string;
	imagemAlt?: string;
	comunicados?: TContestsProp[];
	documentos?: TContestsProp[];
	estatisticas?: TContestsProp[];
	gabaritos?: TContestsProp[];
	inscricoes?: TContestsProp[];
	resultados?: TContestsProp[];
	textosELivrosIndicados?: TContestsProp[];
	faq?: string;
	eventos?: string;
	noticias?: string;
};

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
	},
];

const Concursos = (): React.ReactElement => {
	return (
		<main>
			<PageTitle title="Concursos em Andamento" />

			<ol className="grid grid-cols-1 px-8 sm:px-0 sm:grid-cols-2 gap-8 mt-14">
				{
					contestsData.map((item, idx) => (
						<li key={String(idx)} className="group flex flex-col border border-title_blue p-4 pb-10 rounded">

							<div className="flex flex-col items-center gap-4 w-full pb-4 flex-1">
								<div className="h-52 w-full bg-slate-200 rounded flex items-center justify-center overflow-hidden">
									{item.imagem
										? <div className="w-full h-full flex justify-center items-center">
											<Image
												width={208}
												height={208}
												alt={item?.imagemAlt ?? `Imagem representativa do concurso ${item.titulo}`}
												src={item.imagem}
												className="group-hover:scale-105 duration-[400ms] transition-transform w-full h-full object-cover"
											/>
										</div>
										: <FileText className="w-24 h-24 stroke-yellow_1 dark:fill-gray_text group-hover:scale-105 duration-[400ms] transition-transform" />
									}
								</div>

								<h3 className="line-clamp-2 mx-2 text-left leading-7 text-xl font-semibold">{item.titulo}</h3>
							</div>

							<div className="pl-2 mt-6">
								<div className='flex gap-2'>
									<ArrowDropright className="mt-1 h-8 w-8 fill-title_blue" />
									<div>
										<h2 className="flex gap-1 text-lg">
											Período de inscrição
										</h2>
										{
											item.periodoInscricao
												? <strong className={"font-semibold text-sm"}>
													{format(item.periodoInscricao.inicio, 'dd/MM/yyyy')} - {item.periodoInscricao.fim ? format(item.periodoInscricao.fim, 'dd/MM/yyyy') : 'Data fim não definida'}
												</strong>
												: <span className={"text-red-500 text-md"}>{'Período de inscrições não definido'}</span>
										}
									</div>
								</div>

								<div className="flex items-center gap-2 mt-3">
									<Newspaper className="h-8 w-8 fill-title_blue" style={{ strokeWidth: 2 }} />
									<Link
										href={'concursos/1'}
										as={`concursos/${item.titulo.replaceAll(' ', '_').toLocaleLowerCase()}`}
										prefetch={false}
										className="text-lg underline hover:text-title_blue underline-offset-2"
									>
										Notícias
									</Link>
								</div>

								<div className="flex items-center gap-2 mt-3">
									<ArrowUpRight className="h-8 w-8 stroke-title_blue" />
									<Link
										href={'concursos/1'}
										as={`concursos/${item.titulo.replaceAll(' ', '_').toLocaleLowerCase()}`}
										prefetch={false}
										className="text-lg underline hover:text-title_blue underline-offset-2"
									>
										Detalhes
									</Link>
								</div>
							</div>
						</li>
					))
				}
			</ol>

			<Spacer />

			<Accordion type="single" collapsible>
				{
					contestsData.map((item, idx) => (
						<AccordionItem key={String(idx)} value={`item-${idx}`} className="group rounded border border-title_blue">
							<AccordionTrigger className="text-left leading-7 p-4 hover:brightness-100">
								<div className="flex items-center gap-4 w-full">
									<div className="h-36 min-w-[240px] w-60 bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
										{item.imagem ? <Image
											width={200}
											height={144}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[400ms]"
											src={item.imagem}
											alt={'imagem concurso'}
										/> : <FileText className="w-24 h-24 opacity-30 dark:fill-gray_text group-hover:scale-105 transition-transform duration-[400ms]" />}
									</div>

									<h3 className="line-clamp-3">{item.titulo}</h3>
								</div>
							</AccordionTrigger>
							<AccordionContent className="pb-6">
								<PeriodStates period={item.periodoInscricao} className='mb-2' textClassName="text-lg" />

								<div className="flex items-center gap-4">
									<Newspaper className="h-8 w-8 fill-title_blue" style={{ strokeWidth: 2 }} />
									<Link
										href={'concursos/1'}
										as={`concursos/${item.titulo.replaceAll(' ', '_').toLocaleLowerCase()}`}
										prefetch={false}
										className="text-lg underline hover:text-title_blue underline-offset-2"
									>
										Notícias
									</Link>
								</div>

								<div className="flex items-center gap-4 mt-2">
									<ArrowUpRight className="h-8 w-8 stroke-title_blue" />{' '}
									<Link
										href={'concursos/1'}
										as={`concursos/${item.titulo.replaceAll(' ', '_').toLocaleLowerCase()}`}
										prefetch={false}
										className="text-lg underline hover:text-title_blue underline-offset-2"
									>
										Detalhes
									</Link>
								</div>
							</AccordionContent>
						</AccordionItem>
					))
				}
			</Accordion>

			<Spacer />

			<div className="w-full flex justify-center">
				<button className="bg-primary text-white text-xl p-4 mouse-over">Carregar Mais</button>
			</div>

			<Spacer />
		</main>
	)
}

export default Concursos;