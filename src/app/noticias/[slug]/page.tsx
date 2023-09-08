import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../../components/spacer';
import { PageTitle } from '../../components/page-title';
import { api } from '../../../api/api';
import { RawToMarkdown } from '../../components/react-markdown';

type TNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
		noticia: string;
		imagem_noticia: {
			data: {
				id: number;
				attributes: {
					name: string;
					alternativeText: string;
					caption: string;
					width: number;
					height: number;
					formats: string;
					hash: string;
					ext: string;
					mime: string;
					size: number;
					url: string;
					previewUrl: string;
					provider: string;
					provider_metadata: string;
					related: {
						data: [
							{
								id: number;
								attributes: {};
							}
						];
					};
					folder: {
						data: {
							id: number;
							attributes: {};
						};
					};
					folderPath: string;
				};
			} | null;
		};
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
	const { imagem_noticia } = data;

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

			{imagem_noticia && (
				<figure className="w-full overflow-hidden">
					<Image
						src={imagem_noticia.data.attributes.url}
						width={imagem_noticia.data.attributes.width}
						height={imagem_noticia.data.attributes.height}
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
				components={{
					a({ children, ...props }) {
						return (
							<a className="text-title_blue underline" {...props}>
								{children}
							</a>
						);
					}
				}}
			/>

			<Spacer />
		</main>
	);
}
