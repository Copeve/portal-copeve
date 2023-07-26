import Link, { LinkProps } from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

type Props = { className?: string } & LinkProps;

const SeeMoreButton = ({ className, ...props }: Props) => (
	<Link
		{...props}
		className={`flex items-center justify-center font-bold text-title_blue dark:text-white ${className}`}
	>
		Mais informações{' '}
		<HiChevronRight className="h-6 w-6 fill-yellow_1 pt-px" />
	</Link>
);

export { SeeMoreButton };
