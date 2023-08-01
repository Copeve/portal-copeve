import Link from "next/link"
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Spacer } from "../components/spacer";

export default function NewsList() {
	return (
		<main>
			<h1 className="text-5xl pb-4">Notícias</h1>

			{
				new Array(10).fill(newsData).map((item, index) => (
					<Link key={String(index)} prefetch={false} href={'noticias/1'} className="flex flex-col border-b w-full pt-2 pb-4 group">
						<time className={'text-lg font-bold text-title_blue mb-2'} dateTime={item.date}>{format(new Date(item.date), "dd LLL", {
							locale: ptBR
						})}</time>

						<h2 className="text-lg font-bold leading-5 mb-2 group-hover:text-title_blue transition-colors">{item.title}</h2>

						<p className="text-sm leading-4">{item.preview}</p>
					</Link>
				))
			}

			<Spacer />
		</main>
	)
}

const newsData = {
	date: '2023-03-01',
	title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae modi esse nisi ipsa maxime atque.',
	preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vel quos quam est nulla voluptate, nobis, maxime atque quae saepe possimus velit! Iusto natus tenetur iure architecto rerum, neque ad.'
}