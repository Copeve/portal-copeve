import Link from 'next/link';
import { AiOutlineTwitter } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

type Props = {
	className?: string;
	/** Ex: fill-white | stroke-red-500*/
	iconColor?: string;
};

export const TwitterButton = ({ className, iconColor }: Props) => {
	return (
		<Link
			href={'https://twitter.com/ufmg'}
			aria-label="Acesso à página do Twitter da UFMG"
			className={twMerge(
				'h-9 w-9 rounded-full border border-white p-1 transition-all duration-300 hover:brightness-75',
				className
			)}
			target="_blank"
			prefetch={false}
			title={'Acesso à página do Twitter da UFMG'}
		>
			<AiOutlineTwitter
				className={twMerge('h-full w-full fill-white', iconColor)}
			/>
		</Link>
	);
};
