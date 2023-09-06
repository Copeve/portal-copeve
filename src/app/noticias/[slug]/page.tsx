import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../../components/spacer';
import { PageTitle } from '../../components/page-title';
import { api } from '../../../api/api';

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		noticia: string;
	};
};

type Props = {
	params: { slug: string };
};

async function getData(id: string): Promise<TNews> {
	const { data, error } = await api<{ data: TNews }>({
		url: `/noticias/${id}`,
		strapiQueryParams: [],
		fetchOptions: {
			cache: 'no-cache'
		}
	});

	if (error) {
		if (error.status === 404) return notFound();
		throw new Error(error.message);
	}

	return data;
}

export default async function NewsContent({ params }: Props) {
	const response = await getData(params.slug);

	const { attributes: data } = response;

	return (
		<main>
			<PageTitle title={data.titulo} />

			<p className="pb-16 pt-4 text-lg">
				<time
					dateTime={format(new Date(data.publishedAt), 'yyyy-MM-dd')}
				>
					{format(
						new Date(data.publishedAt),
						"EEEE, dd 'de' MMMM 'de' yyyy, 'às' HH'h'mm",
						{
							locale: ptBR
						}
					)}
				</time>
			</p>

			{/* <figure className="w-full overflow-hidden">
				<Image
					src={
						'https://live.staticflickr.com/7237/6990120326_261dd73545_b.jpg'
					}
					width={1080}
					height={500}
					alt={'Imagem da notícia'}
				/>

				<figcaption className="mt-2 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
					porro nostrum adipisci eaque, repudiandae amet, esse,
					dolorum ab soluta temporibus in? Illo itaque similique
					autem, consectetur minima totam excepturi doloribus.
				</figcaption>
			</figure> */}

			<ReactMarkdown
				children={data.noticia}
				rehypePlugins={[rehypeRaw]}
				className="text-justify text-lg leading-8"
			/>

			<Spacer />
		</main>
	);
}
