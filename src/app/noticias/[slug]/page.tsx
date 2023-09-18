import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../../components/spacer';
import { PageTitle } from '../../components/page-title';
import { api } from '../../../api/api';
import { RawToMarkdown } from '../../components/react-markdown';
import { TStrapiImage } from '../../../dto/strapi.dto';
import ScrollToTop from '../../components/scroll-to-top';

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		noticia: string;
		imagem_noticia: TStrapiImage;
	};
};

type Props = {
	params: { slug: string };
};

export default async function NewsContent({ params }: Props) {
	const response = await getData(params.slug);

	const { attributes: data } = response;

	const { imagem_noticia } = data;
	const displayedImage =
		imagem_noticia.data && imagem_noticia.data.attributes.formats.large;
	const newsDate = toDate(data.publishedAt.split('T')[0]);

	return (
		<main>
			<ScrollToTop />
			<PageTitle title={data.titulo} />

			<p className="pb-16 pt-4 text-lg">
				<time dateTime={format(newsDate, 'yyyy-MM-dd')}>
					{format(
						newsDate,
						"EEEE, dd 'de' MMMM 'de' yyyy, 'às' HH'h'mm",
						{
							locale: ptBR
						}
					)}
				</time>
			</p>

			{displayedImage && (
				<figure className="w-full overflow-hidden">
					<Image
						src={`${process.env.NEXT_PUBLIC_API_URL}${displayedImage.url}`}
						width={displayedImage.width}
						height={displayedImage.height}
						alt={imagem_noticia.data.attributes.alternativeText}
					/>

					<figcaption className="mt-2 text-sm">
						{imagem_noticia.data.attributes.caption}
					</figcaption>
				</figure>
			)}

			<RawToMarkdown
				text={data.noticia}
				className="text-justify text-lg leading-8"
			/>

			<Spacer />
			<Spacer />
		</main>
	);
}

async function getData(id: string): Promise<TNews> {
	const { data, error } = await api<{ data: TNews }>({
		url: `/noticias/${id}`,
		strapiQueryParams: ['populate=imagem_noticia'],
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		if (error.status === 404) return notFound();
		throw new Error(error.message);
	}

	return data;
}
