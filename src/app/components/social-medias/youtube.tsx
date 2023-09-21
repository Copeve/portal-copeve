import Link from 'next/link';
import { AiFillYoutube } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

type Props = {
	link: string;
	className?: string;
	/** Ex: fill-white | stroke-red-500*/
	iconColor?: string;
};

export const YoutubeButton = ({ className, iconColor, link }: Props) => {
	return (
		<Link
			href={link}
			aria-label="Acesso à página do Instagram da UFMG"
			className={twMerge(
				'h-9 w-9 rounded-full border border-white p-1 transition-all duration-300 hover:brightness-75',
				className
			)}
			target="_blank"
			prefetch={false}
			title={'Acesso à página do Instagram da UFMG'}
		>
			<AiFillYoutube
				className={twMerge('h-full w-full fill-white', iconColor)}
			/>
		</Link>
	);
};
