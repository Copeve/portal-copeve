import { notFound } from 'next/navigation';
import { api } from '../../api/api';
import { PageTitle } from '../components/page-title';
import { RawToMarkdown } from '../components/react-markdown';

export default async function PoliticaDePrivacidade() {
	const data = await getData();
	return (
		<div>
			<PageTitle title="Política De Privacidade" />

			<div className="mt-8">
				<RawToMarkdown text={data.attributes.politica_privacidade} />
			</div>
		</div>
	);
}

const getData = async () => {
	const { data, error } = await api<{
		data: { attributes: { politica_privacidade: string } };
	}>({
		url: '/politica-privacidade',
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) {
		if (error.status === 404) return notFound();
		throw new Error(error.message);
	}

	return data;
};
