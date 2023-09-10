export type TContest = {
	id: number;
	attributes: {
		nome: string;
		ano: number;
		data_inicio: string;
		data_fim: string;
		encerrado: boolean;
		link_incricao: string | null;
		destaque: boolean;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		link: string | null;
		link_area_candidato: string | null;
		logo: {
			data: {
				textoAlt?: string;
				link?: string;
			} | null;
		};
	};
};

export type TContestNews = {
	id: number;
	attributes: {
		titulo: string;
		publishedAt: string;
	};
};

export type TContestEvent = {
	id: number;
	attributes: {
		data: string;
		observacao: string | null;
		publishedAt: string;
		tipo_calendario: {
			data: {
				id: number;
				attributes: {
					nome: string;
					descricao: string | null;
				};
			};
		};
	};
};

export type TContestFileData = {
	id: number;
	attributes: {
		observacao: string | null;
		titulo: string;
		tipo_arquivo: {
			data: {
				id: number;
				attributes: {
					nome: string;
				};
			};
		};
		arquivo: {
			data: {
				id: number;
				attributes: {
					name: string;
					alternativeText: string | null;
					ext: string;
					mime: string;
					url: string;
				};
			};
		};
	};
};
