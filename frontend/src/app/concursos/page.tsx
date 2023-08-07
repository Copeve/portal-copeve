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
import { ArrowDropright, ArrowUpRight, SolidBookContent } from "../components/Icons";
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
		imagem: 'http://localhost:3000/logo/aplicacoes_ufmg/principal_completa_ufmg.jpg'
	},
	{
		titulo: 'Lorem ipsum - dolor sit (amet), consecteturadipisicing elit. Impedit obcaecati quibusdam reiciendis suscipit sunt libero iure vero ratione aliquid quidem nulla',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://healvets.org/wp-content/uploads/2021/10/ef3-placeholder-image.jpeg'
	},
	{
		titulo: 'Colégio Técnico 2024 - Cursos Subsequentes',
		periodoInscricao: {
			inicio: new Date('2023-05-23'),
			fim: addHours(new Date(), 4)
		},
		imagem: 'https://healvets.org/wp-content/uploads/2021/10/ef3-placeholder-image.jpeg'
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

			<Spacer />

			<Accordion type="single" collapsible>
				{
					contestsData.map((item, idx) => (
						<AccordionItem key={String(idx)} value={`item-${idx}`} className="rounded-none hover:bg-zinc-100 dark:hover:bg-zinc-900">
							<AccordionTrigger className="text-left leading-7 p-4 hover:brightness-100">
								<div className="flex items-center gap-4 w-full">
									<div className="h-36 min-w-[240px] w-60 bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
										{item.imagem ? <Image
											width={200}
											height={144}
											className="w-full h-full object-cover"
											src={item.imagem}
											alt={'imagem concurso'}
										/> : <SolidBookContent className="w-18 h-18 opacity-30 dark:fill-gray_text" />}
									</div>

									<h3 className="line-clamp-3">{item.titulo}</h3>
								</div>
							</AccordionTrigger>
							<AccordionContent className="pl-8 pb-6">
								<PeriodStates period={item.periodoInscricao} />

								<div className="flex items-center gap-4 pl-[3px]">
									<ArrowUpRight className="h-[26px] w-[26px] border-title_blue border-2 rounded-full stroke-title_blue" />{' '}
									<Link
										href={'concursos/1'}
										as={`concursos/${item.titulo.replaceAll(' ', '_').toLocaleLowerCase()}`}
										className="text-xl underline hover:text-title_blue underline-offset-2"
									>
										Main informações sobre este concurso
									</Link>
								</div>
							</AccordionContent>
						</AccordionItem>
					))
				}
			</Accordion>

			<Spacer />

			<ol className="flex flex-wrap items-stretch justify-stretch gap-5 gap-y-5">
				{
					contestsData.map((item, idx) => (
						<li key={String(idx)} className="w-[calc(50%-20px)] h-full border border-title_blue rounded-xl p-4 pb-10">

							<div className="flex flex-col items-center gap-4 h-full w-full mb-2 pb-8 border-b">
								<div className="h-48 w-full bg-slate-200 rounded-xl flex items-center justify-center">
									{item.imagem ? <div
										className="w-full h-full bg-center bg-no-repeat"
										style={{ backgroundImage: `url(${item.imagem})`, backgroundSize: '80%' }}
									/> : <SolidBookContent className="w-18 h-18 opacity-30 dark:fill-gray_text" />}
								</div>

								<h3 className="line-clamp-3 text-justify leading-7 text-xl font-semibold">{item.titulo}</h3>
							</div>


							<div className="flex flex-wrap mb-6">
								<div className='flex gap-x-4 items-center'>
									<ArrowDropright className="h-8 w-8 min-w-[32px] min-h-[32px] fill-title_blue" />{' '}
									<h2 className="flex gap-1 flex-col text-xl pt-5">
										{'Período de inscrição'}
										{
											item.periodoInscricao
												? <strong className={"font-semibold text-base"}>
													{format(item.periodoInscricao.inicio, 'dd/MM/yyyy')} - {item.periodoInscricao.fim ? format(item.periodoInscricao.fim, 'dd/MM/yyyy') : 'Data fim não definida'}
												</strong>
												: <span className={"text-red-500 text-md"}>{'Período de inscrições não definido'}</span>
										}
									</h2>
								</div>
								{/* <span className='text-red-500 text-md w-full pl-12'>{outOfDateMessage}</span> */}
							</div>

							<div className="flex items-center gap-4 pl-[3px]">
								<ArrowUpRight className="h-[26px] w-[26px] border-title_blue border-2 rounded-full stroke-title_blue" />{' '}
								<Link
									href={'concursos/1'}
									as={`concursos/${item.titulo.replaceAll(' ', '_').toLocaleLowerCase()}`}
									className="text-lg underline hover:text-title_blue underline-offset-2"
								>
									Detalhes
								</Link>
							</div>

						</li>
					))
				}
			</ol>

			<Spacer />
		</main>
	)
}

export default Concursos;