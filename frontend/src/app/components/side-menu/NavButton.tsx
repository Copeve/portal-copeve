import Link, { LinkProps } from 'next/link';
import { ElementType } from 'react';

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
		<Link {...linkProps} className={className}>
			{text}
			{Icon && <Icon />}
		</Link>
	);
};

export { NavButton };
