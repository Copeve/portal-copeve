import { api } from '../../api/api';
import { PageTitle } from '../components/page-title';
import { Spacer } from '../components/spacer';

type TAboutUsData = {
	data: {
		id: number;
		attributes: {
			historia: string;
			missao: string;
			o_que_faz: string;
			visao: string;
		};
	};
};

export default async function Copeve() {
	const { data } = await api<TAboutUsData>({
		url: '/quem-somo',
		fetchOptions: {
			next: {
				revalidate: 60 * 60 * 24 // 24 horas
			}
		}
	});

	return (
		<main className="flex flex-col gap-16">
			<PageTitle title="A COPEVE" />

			<Section title="História" text={data.attributes.historia} />

			<Section title={'Missão'} text={data.attributes.missao} />

			<Section title="Visão" text={data.attributes.visao} />

			<Section title="O que faz" text={data.attributes.o_que_faz} />

			<Spacer />
		</main>
	);
}

function Section({ title, text }: { title: string; text: string }) {
	return (
		<section>
			<h2 className="mb-4 text-2xl font-medium">{title}</h2>
			<p className="whitespace-pre-line text-justify leading-7">{text}</p>
		</section>
	);
}
