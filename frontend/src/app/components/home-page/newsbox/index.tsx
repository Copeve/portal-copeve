import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

type Props = {
	imageUrl: string;
	imgAlt: string;
	title: string;
	date: Date;
};

export function NewsBox({ imageUrl, imgAlt, title, date }: Props) {
	return (
		<Link
			prefetch={false}
			href="/"
			className="flex h-full w-full flex-col gap-2 overflow-hidden md:flex-row lg:flex-col"
		>
			<div className="group aspect-4/3 min-w-[50%] max-w-full overflow-hidden">
				<Image
					src={imageUrl}
					width={1000}
					height={500}
					alt={imgAlt}
					className={
						'min-h-full min-w-full self-center object-cover transition-transform duration-500 group-hover:scale-110'
					}
				/>
			</div>

			<div className="flex w-full flex-col">
				<h2 className="line-clamp-4 text-lg font-bold">{title}</h2>

				<span className="pt-3 opacity-60">
					{format(date, 'dd LLL yy')}
				</span>
			</div>
		</Link>
	);
}
