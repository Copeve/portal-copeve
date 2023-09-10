import ReactMarkdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { twMerge } from 'tailwind-merge';

type Props = Omit<Options, 'children' | 'rehypePlugins'> & {
	text: string;
};

export function RawToMarkdown({ text, className, ...props }: Props) {
	return (
		<ReactMarkdown
			rehypePlugins={[rehypeRaw]}
			className={twMerge('[&>*]:all-revert', className)}
			components={{
				a: ({ children, className, ...props }) => {
					return (
						<a
							className={twMerge(
								'text-title_blue underline dark:text-white',
								className
							)}
							{...props}
						>
							{children}
						</a>
					);
				}
			}}
			{...props}
		>
			{text}
		</ReactMarkdown>
	);
}
