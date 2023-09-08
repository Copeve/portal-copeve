import ReactMarkdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = Omit<Options, 'children' | 'rehypePlugins'> & {
	text: string;
};

export function RawToMarkdown({ text, ...props }: Props) {
	return (
		<ReactMarkdown rehypePlugins={[rehypeRaw]} {...props}>
			{text}
		</ReactMarkdown>
	);
}
