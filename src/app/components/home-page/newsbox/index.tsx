import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Newspaper } from '../../Icons';
import { TStrapiImage } from '../../../../dto/news.dto';

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		imagem_noticia: TStrapiImage;
	};
};

type Props = {
	data: TNews;
};

export function NewsBox({ data }: Props) {
	const { titulo, publishedAt, imagem_noticia } = data.attributes;
	const { data: newsImage } = imagem_noticia;
	const displayedImg = imagem_noticia.data?.attributes.formats.small;

	return (
		<Link
			prefetch={false}
			href={`noticias/${data.id}`}
			className="flex h-full w-full flex-col gap-2 overflow-hidden md:flex-row lg:flex-col"
		>
			<div className="group aspect-4/3 min-w-[50%] max-w-full overflow-hidden">
				{displayedImg ? (
					<Image
						src={`${process.env.NEXT_PUBLIC_API_URL}${displayedImg.url}`}
						width={displayedImg.width}
						height={displayedImg.height}
						alt={newsImage.attributes.alternativeText}
						className={
							'min-h-full min-w-full self-center object-cover transition-transform duration-500 group-hover:scale-110'
						}
					/>
				) : (
					<div
						className={
							'flex min-h-full min-w-full items-center justify-center self-center rounded bg-slate-200 object-cover transition-transform duration-500 group-hover:scale-110'
						}
					>
						<Newspaper className="h-24 w-24 opacity-30 transition-transform duration-[400ms] group-hover:scale-105 dark:stroke-gray_text" />
					</div>
				)}
			</div>

			<div className="flex w-full flex-col">
				<h2 className="line-clamp-4 text-lg font-bold">{titulo}</h2>

				<span className="pt-3 opacity-60">
					{format(new Date(publishedAt), 'dd LLL yy')}
				</span>
			</div>
		</Link>
	);
}
