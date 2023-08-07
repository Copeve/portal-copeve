import Image from 'next/image';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../../components/spacer';
import { PageTitle } from '../../components/page-title';

type Props = {
	params: { slug: string };
};

export default function NewsContent({ params }: Props) {
	return (
		<main>
			<PageTitle title="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />

			<p className="pb-8 pt-4 text-lg">
				<time dateTime="2023-07-30">
					{format(
						new Date('2023-07-30T08:35:16'),
						"EEEE, dd 'de' MMMM 'de' yyyy, 'às' HH'h'mm",
						{
							locale: ptBR
						}
					)}
				</time>
			</p>

			<figure className="w-full overflow-hidden">
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
			</figure>

			<p className="mt-8 whitespace-pre-line text-justify text-lg leading-8">
				{
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n\nLaborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate.\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate.\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate.'
				}
			</p>

			<Spacer />
		</main>
	);
}
