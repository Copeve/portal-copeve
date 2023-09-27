import { TContestFileData } from '../dto/contest-details.dto';

/** Agrupa um array de dados da API do Strapi pela propriedade 'publishedAt' */
export function groupByPublishedDate<
	T extends { attributes: { publishedAt: string } }
>(data: T[]) {
	const grouped: Record<string, T[]> = {};

	data.forEach((item) => {
		const key = item.attributes.publishedAt.substring(0, 7);

		if (grouped[key]) {
			grouped[key].push(item);
		} else {
			grouped[key] = [item];
		}
	});

	return grouped;
}

/** Agrupa um array de dados da API do Strapi pela propriedade 'data' quando possui parametro de data */
export function groupByPropDate<
	T extends { attributes: { data: string } }
>(data: T[]) {
	const grouped: Record<string, T[]> = {};

	data.forEach((item) => {
		const key = item.attributes.data.substring(0, 7);

		if (grouped[key]) {
			grouped[key].push(item);
		} else {
			grouped[key] = [item];
		}
	});

	return grouped;
}


type TContestGroupedFiles = {
	tipo_arquivo: TContestFileData['attributes']['tipo_arquivo'];
	arquivos: (TContestFileData['attributes']['arquivo'] & {
		observacao: string | null;
		titulo: string;
	})[];
};

export function groupFiles(data: TContestFileData[]): TContestGroupedFiles[] {
	const newDataStructure: TContestGroupedFiles[] = [];

	data.forEach((file) => {
		const hasGroupIndex = newDataStructure.findIndex(
			(e) =>
				e.tipo_arquivo.data.id === file.attributes.tipo_arquivo.data.id
		);

		if (hasGroupIndex !== -1) {
			newDataStructure[hasGroupIndex].arquivos.push({
				...file.attributes.arquivo,
				titulo: file.attributes.titulo,
				observacao: file.attributes.observacao
			});
		} else {
			newDataStructure.push({
				tipo_arquivo: file.attributes.tipo_arquivo,
				arquivos: [
					{
						...file.attributes.arquivo,
						titulo: file.attributes.titulo,
						observacao: file.attributes.observacao
					}
				]
			});
		}
	});

	return newDataStructure;
}
