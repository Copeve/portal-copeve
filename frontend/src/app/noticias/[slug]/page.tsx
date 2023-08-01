import Image from "next/image";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from "../../components/spacer";

type Props = {
	params: { slug: string };
};

export default function NewsContent({ params }: Props) {
	return (
		<main>
			<h1 className="text-5xl pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>

			<p className="text-lg pb-8">
				<time dateTime="2023-07-30">{format(new Date('2023-07-30T08:35:16'), "EEEE, dd 'de' MMMM 'de' yyyy, 'às' HH'h'mm", {
					locale: ptBR
				})}</time>
			</p>

			<figure className="w-full overflow-hidden">
				<Image
					src={'https://live.staticflickr.com/7237/6990120326_261dd73545_b.jpg'}
					width={1080}
					height={500}
					alt={'Imagem da notícia'}
				/>

				<figcaption className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro nostrum adipisci eaque, repudiandae amet, esse, dolorum ab soluta temporibus in? Illo itaque similique autem, consectetur minima totam excepturi doloribus.</figcaption>
			</figure>

			<p className="whitespace-pre-line text-justify text-lg mt-8 leading-8">{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n\nLaborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate.\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate.\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum eum corrupti inventore voluptatem deleniti ipsa repellat illo sit, commodi fugiat consequuntur consequatur iusto autem perferendis necessitatibus ut? Iusto, tempora voluptate.'}</p>

			<Spacer />
		</main>
	)
}