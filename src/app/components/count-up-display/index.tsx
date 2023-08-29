import CountUp from 'react-countup';
import { twMerge } from 'tailwind-merge';

type ShowResultsProps = {
	end: number;
	duration?: number;
	title?: string;
	className?: string;
};

function ShowResults({
	end,
	duration = 8,
	title,
	className
}: ShowResultsProps) {
	return (
		<div
			className={twMerge(
				'flex flex-col items-center justify-center gap-6',
				className
			)}
		>
			<h3 className="text-center text-xl">{title}</h3>
			<CountUp
				end={end}
				duration={duration}
				enableScrollSpy
				scrollSpyOnce
				className="text-5xl font-semibold text-title_blue drop-shadow-2xl"
			/>
		</div>
	);
}

export { ShowResults };
