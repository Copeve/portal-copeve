import { format, formatDistanceToNow, isAfter } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
import { ArrowDropright } from '../../components/Icons';
import { twMerge } from 'tailwind-merge';

type Props = {
	period:
	| {
		startDate?: string;
		endDate?: string;
	}
	| undefined;
	className?: string;
	textClassName?: string;
};

export function PeriodStates({ className, textClassName, period }: Props) {
	const formatOptions = { locale: ptBR };
	let outOfDateMessage = '';
	const toStartDate
		= period?.startDate && toDate(period.startDate, formatOptions);
	const toEndDate = period?.endDate && toDate(period.endDate, formatOptions);

	if (toStartDate) {
		if (!isAfter(new Date(), toStartDate)) {
			outOfDateMessage = `O período de inscrição se inicia em ${formatDistanceToNow(
				toStartDate,
				formatOptions
			)}`;
		}
	}

	if (toEndDate) {
		if (isAfter(new Date(), toEndDate)) {
			outOfDateMessage = `O período de inscrição se encerrou há ${formatDistanceToNow(
				toEndDate,
				formatOptions
			)}`;
		}
	}

	return (
		<div className={twMerge('mb-6 flex flex-wrap', className)}>
			<div className="flex items-center gap-x-4">
				<ArrowDropright className="h-8 min-h-[32px] w-8 min-w-[32px] fill-title_blue" />{' '}
				<h2
					className={twMerge(
						'flex items-center gap-2 text-xl',
						textClassName
					)}
				>
					Período de inscrição:
					{period ? (
						<strong className={'font-semibold'}>
							{toStartDate
								? format(toStartDate, 'dd/MM/yyyy')
								: 'Data início não definida'}{' '}
							-{' '}
							{toEndDate
								? format(toEndDate, 'dd/MM/yyyy')
								: 'Data fim não definida'}
						</strong>
					) : (
						<span className={'text-md text-red-500'}>
							{'Período de inscrições não definido'}
						</span>
					)}
				</h2>
			</div>
			<span className="text-md w-full pl-12 text-red-500">
				{outOfDateMessage}
			</span>
		</div>
	);
}
