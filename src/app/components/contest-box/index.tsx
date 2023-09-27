import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { PeriodStates } from '../../concursos/[slug]/PeriodStates';
import { ArrowDropright, ArrowUpRight, FileText } from '../Icons';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '../accordion';
import { TStrapiImage } from '../../../dto/strapi.dto';

type TContest = {
	id: number;
	attributes: {
		nome: string;
		data_inicio: string;
		data_fim: string;
		logo: TStrapiImage;
	};
};

type Props = {
	layout: '1' | '2';
	data: TContest[];
	defaultValue?: string;
};

const ContestBox = ({
	layout,
	data,
	defaultValue
}: Props): React.ReactElement => {
	if (layout === '1') {
		return <LayoutOne data={data} />;
	}

	return <LayoutTwo data={data} defaultValue={defaultValue} />;
};

function LayoutOne({ data }: { data: TContest[] }) {
	const Period = (props: {
		formattedStartDate: string | undefined;
		formattedEndDate: string | undefined;
	}) => {
		const { formattedStartDate, formattedEndDate } = props;
		return (
			<div className="flex gap-2">
				<ArrowDropright className="mt-1 h-8 w-8 fill-title_blue" />
				<div>
					<h2 className="flex gap-1 text-lg">Período de inscrição</h2>
					{formattedStartDate ? (
						<strong className={'text-sm font-semibold'}>
							{formattedStartDate} -{' '}
							{formattedEndDate || 'Data fim não definida'}
						</strong>
					) : (
						<span className={'text-md text-red-500'}>
							Período de inscrições não definido
						</span>
					)}
				</div>
			</div>
		);
	};

	const DetailsLink = (props: { id: number; nome: string }) => (
		<div className="mt-3 flex items-center gap-2">
			<ArrowUpRight className="h-8 w-8 stroke-title_blue" />
			<Link
				href={`concursos/${props.id}`}
				prefetch={false}
				className="text-lg underline underline-offset-2 hover:text-title_blue"
			>
				Detalhes
			</Link>
		</div>
	);

	return (
		<ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{data.map(({ id, attributes: attrs }) => {
				const { nome, logo, data_inicio, data_fim } = attrs;
				const displayedImg = logo.data?.attributes.formats.medium;

				const formattedStartDate =
					data_inicio
					&& format(toDate(data_inicio.split('T')[0]), 'dd/MM/yyyy');

				const formattedEndDate
					= data_fim
					&& format(toDate(data_fim.split('T')[0]), 'dd/MM/yyyy');

				return (
					<li
						key={`item-${id}`}
						className="group flex flex-col rounded border border-title_blue p-4 pb-10 dark:border-white"
					>
						<Link
							href={`concursos/${id}`}
							className="flex w-full flex-1 flex-col items-center gap-4 pb-4"
						>
							<div className="flex h-52 w-full items-center justify-center overflow-hidden rounded bg-slate-200">
								{logo.data ? (
									<div className="flex h-full w-full items-center justify-center">
										<Image
											width={displayedImg.width}
											height={displayedImg.height}
											alt={
												logo.data?.attributes
													.alternativeText
												?? `Imagem representativa do concurso ${nome}`
											}
											src={`${process.env.NEXT_PUBLIC_API_URL}${displayedImg.url}`}
											className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
										/>
									</div>
								) : (
									<FileText className="h-24 w-24 stroke-1 opacity-30 transition-transform duration-[400ms] group-hover:scale-105 dark:stroke-gray_text" />
								)}
							</div>

							<h3 className="line-clamp-2 self-start text-left text-xl font-semibold leading-7">
								{nome}
							</h3>
						</Link>

						<div className="mt-6 pl-2">
							<Period
								formattedStartDate={formattedStartDate}
								formattedEndDate={formattedEndDate}
							/>

							<DetailsLink id={id} nome={nome} />
						</div>
					</li>
				);
			})}
		</ol>
	);
}

function LayoutTwo({
	data,
	defaultValue
}: {
	data: TContest[];
	defaultValue: string;
}) {
	return (
		<Accordion type="single" defaultValue={defaultValue} collapsible>
			{data.map(({ id, attributes: attrs }) => {
				const displayedImg = attrs.logo.data?.attributes.formats.medium;

				return (
					<AccordionItem
						key={`item-${id}`}
						value={`item-${id}`}
						className="group rounded border border-title_blue dark:border-white"
					>
						<AccordionTrigger
							iconProps={{
								className: 'hidden w-0 mG:w-6 mG:block'
							}}
							className="gap-0 p-4 text-left leading-7 hover:brightness-100 mG:gap-2"
						>
							<div className="flex w-full flex-col gap-4 mG:flex-row">
								<div className="flex h-36 w-full min-w-[240px] items-center justify-center overflow-hidden rounded bg-slate-200 mG:w-60">
									{attrs.logo.data ? (
										<Image
											className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
											width={displayedImg.width}
											height={displayedImg.height}
											alt={
												attrs.logo.data?.attributes
													.alternativeText ??
												`Imagem representativa do concurso ${attrs.nome}`
											}
											src={`${process.env.NEXT_PUBLIC_API_URL}${displayedImg.url}`}
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

							<div className="mt-2 flex items-center gap-4">
								<ArrowUpRight className="h-8 w-8 stroke-title_blue" />{' '}
								<Link
									href={{ pathname: `concursos/${id}` }}
									prefetch={false}
									className="text-lg underline underline-offset-2 hover:text-title_blue"
								>
									Detalhes
								</Link>
							</div>
						</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}

export { ContestBox };
