import { twMerge } from 'tailwind-merge';

type Props = {
	title: string;
	className?: string;
};

export function PageTitle({ title, className }: Props) {
	return (
		<h1 className={twMerge('text-4xl text-title_blue', className)}>
			{title}
		</h1>
	);
}
