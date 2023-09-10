import React from 'react';
import { twMerge } from 'tailwind-merge';
import { OutlineFilePdf, OutlineLink } from '../../components/Icons';

type Props = {
	children: React.ReactNode;
	/** classe que será mesclada com o container filho*/
	childrenClassName?: string;
};

export function LinksDocList({ children, childrenClassName }: Props) {
	return (
		<ol className="space-y-4 pl-4 text-lg">
			{React.Children.toArray(children).map((child, index) => (
				<li key={String(index)}>
					{React.cloneElement(
						child as React.ReactElement<
							any,
							string | React.JSXElementConstructor<any>
						>,
						{
							className: twMerge(
								'mouse-over flex items-center gap-2 hover:underline underline-offset-4 relative',
								childrenClassName
							)
						}
					)}
				</li>
			))}
		</ol>
	);
}

export function FileIcon({ mime }: { mime: string }) {
	if (mime === '.pdf') {
		return (
			<OutlineFilePdf className="h-8 min-h-[32px] w-8 min-w-[32px] fill-yellow_1 dark:fill-white" />
		);
	}

	return (
		<OutlineLink className="h-8 min-h-[32px] w-8 min-w-[32px] fill-yellow_1 dark:fill-white" />
	);
}
