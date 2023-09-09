import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
	title: string;
	children?: ReactNode;
	className?: string;
	titleClassName?: string;
};

export function Section({
	title,
	children,
	className,
	titleClassName
}: SectionProps) {
	return (
		<section
			className={twMerge('w-full max-w-full self-center', className)}
		>
			<h1
				className={twMerge(
					'mb-8 text-4xl text-title_blue dark:text-white',
					titleClassName
				)}
			>
				{title}
			</h1>
			{children}
		</section>
	);
}
