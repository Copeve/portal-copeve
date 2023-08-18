import { ElementType } from 'react';
import Link, { LinkProps } from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = LinkProps & {
	text: string;
	icon?: ElementType;
	className?: string;
};

const NavButton = ({
	icon: Icon,
	text,
	className,
	...linkProps
}: Props): React.ReactElement => {
	return (
		<Link
			{...linkProps}
			className={twMerge(
				'mouse-over p flex gap-1 border-b-2 border-white border-opacity-10 px-5 py-3 text-lg font-bold text-white',
				className
			)}
		>
			{text.toUpperCase()}
			{Icon && <Icon />}
		</Link>
	);
};

export { NavButton };
