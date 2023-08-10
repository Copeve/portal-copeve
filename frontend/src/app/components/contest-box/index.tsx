import Link from "next/link";
import Image from "next/image";
import { PeriodStates } from "../../concursos/[slug]/PeriodStates";
import { ArrowDropright, ArrowUpRight, FileText, Newspaper } from "../Icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import { format } from "date-fns";

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

type Props = {
	type: '1' | '2';
	data: TContests[];
	defaultValue?: string;
}

const ContestBox = ({ type, data, defaultValue }: Props): React.ReactElement => {
	if (type === '1') {
		return (
			<ol className="grid grid-cols-1 px-8 sm:px-0 sm:grid-cols-2 gap-8">
				{
					data.map((item, idx) => (
						<li className="group flex flex-col border border-title_blue p-4 pb-10 rounded">

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
										: <FileText className="w-24 h-24 opacity-30 dark:fill-gray_text group-hover:scale-105 transition-transform duration-[400ms]" />
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
					))}
			</ol>
		)
	}

	return (
		<Accordion type="single" defaultValue={defaultValue} collapsible>
			{
				data.map((item, idx) => (
					<AccordionItem value={`item-${idx}`} className="group rounded border border-title_blue">
						<AccordionTrigger className="text-left leading-7 p-4 hover:brightness-100">
							<div className="flex gap-4 w-full">
								<div className="h-36 min-w-[240px] w-60 bg-slate-200 rounded overflow-hidden flex items-center justify-center">
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
	)
}

export { ContestBox };