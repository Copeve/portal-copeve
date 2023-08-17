import { format, formatDistanceToNow, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowDropright } from '../../components/Icons';
import { twMerge } from 'tailwind-merge';

type Props = {
	period: {
		inicio: Date;
		fim?: Date;
	} | undefined;
	className?: string;
	textClassName?: string;
}

export function PeriodStates({ className, textClassName, period }: Props) {
	const formatOptions = { locale: ptBR };
	let outOfDateMessage = '';

	if (period) {
		if (!isAfter(new Date(), period.inicio)) {
			outOfDateMessage = `O período de inscrição se inicia em ${formatDistanceToNow(period.inicio, formatOptions)}`
		}

		if (period?.fim) {
			if (isAfter(new Date(), period.fim)) {
				outOfDateMessage = `O período de inscrição se encerrou há ${formatDistanceToNow(period.fim, formatOptions)}`
			}
		}
	}

	return (
		<div className={twMerge("flex flex-wrap mb-6", className)}>
			<div className='flex gap-x-4 items-center'>
				<ArrowDropright className="h-8 w-8 min-w-[32px] min-h-[32px] fill-title_blue" />{' '}
				<h2 className={twMerge("flex gap-2 items-center text-xl", textClassName)}>
					Período de inscrição:
					{
						period
							? <strong className={"font-semibold"}>
								{format(period.inicio, 'dd/MM/yyyy')} - {period.fim ? format(period.fim, 'dd/MM/yyyy') : 'Data fim não definida'}
							</strong>
							: <span className={"text-red-500 text-md"}>{'Período de inscrições não definido'}</span>
					}
				</h2>
			</div>
			<span className='text-red-500 text-md w-full pl-12'>{outOfDateMessage}</span>
		</div>
	)
}