import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

type Props = {
	className?: string;
	/** Ex: fill-white | stroke-red-500*/
	iconColor?: string;
};

export const InstagramButton = ({ className, iconColor }: Props) => {
	return (
		<Link
			href={'https://www.instagram.com/ufmg'}
			aria-label="Acesso à página do Instagram da UFMG"
			className={twMerge(
				'h-9 w-9 rounded-full border border-white p-1 transition-all duration-300 hover:brightness-75',
				className
			)}
			target="_blank"
			prefetch={false}
			title={'Acesso à página do Instagram da UFMG'}
		>
			<AiFillInstagram
				className={twMerge('h-full w-full fill-white', iconColor)}
			/>
		</Link>
	);
};
