import Link from 'next/link';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from '../components/spacer';
import { PageTitle } from '../components/page-title';

export default function NewsList() {
	return (
		<main>
			<PageTitle title="Notícias" className="pb-4" />

			{new Array(10).fill(newsData).map((item, index) => (
				<Link
					key={String(index)}
					prefetch={false}
					href={'noticias/1'}
					className="group flex w-full flex-col border-b pb-4 pt-2"
				>
					<time
						className={'mb-2 text-lg font-bold text-title_blue'}
						dateTime={item.date}
					>
						{format(new Date(item.date), 'dd LLL', {
							locale: ptBR
						})}
					</time>

					<h2 className="mb-2 text-lg font-bold leading-5 transition-colors group-hover:text-title_blue">
						{item.title}
					</h2>

					<p className="text-sm leading-4">{item.preview}</p>
				</Link>
			))}

			<Spacer />
		</main>
	);
}

const newsData = {
	date: '2023-03-01',
	title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi esse nisi ipsa maxime atque.',
	preview:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vel quos quam est nulla voluptate, nobis, maxime atque quae saepe possimus velit! Iusto natus tenetur iure architecto rerum, neque ad.'
};
