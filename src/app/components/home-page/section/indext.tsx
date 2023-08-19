import { ReactNode } from 'react';

type SectionProps = {
	title: string;
	children?: ReactNode;
};

export function Section({ title, children }: SectionProps) {
	return (
		<section className="w-full max-w-full self-center">
			<h1 className="mb-8 text-4xl text-title_blue dark:text-white">
				{title}
			</h1>
			{children}
		</section>
	);
}
