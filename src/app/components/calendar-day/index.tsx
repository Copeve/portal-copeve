import { CalendarEmpty } from '../Icons';

function CalendarNumber({ day }: { day: string }) {
	return (
		<div className="relative">
			<CalendarEmpty className="h-8 min-h-[32px] w-8 min-w-[32px] fill-title_blue dark:fill-white" />
			<span className="absolute bottom-[45%] left-1/2 right-auto top-auto -translate-x-1/2 translate-y-1/2 font-bold text-title_blue dark:font-semibold dark:text-white">
				{day}
			</span>
		</div>
	);
}

export { CalendarNumber };
