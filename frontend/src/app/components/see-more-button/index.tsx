import Link, { LinkProps } from 'next/link';
import { HiChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

type Props = { title?: string; className?: string } & LinkProps;

const SeeMoreButton = ({ title, className, ...props }: Props) => (
	<Link
		{...props}
		className={twMerge(
			'flex items-center justify-center font-bold text-title_blue dark:text-white',
			className
		)}
	>
		{title || 'Mais informações'}{' '}
		<HiChevronRight className="h-6 w-6 fill-yellow_1 pt-px" />
	</Link>
);

export { SeeMoreButton };
