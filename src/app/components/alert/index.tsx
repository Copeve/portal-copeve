import { api } from '../../../api/api';
import { AlertClient } from './AlertClient';

export type TAlert = {
	id: number;
	attributes: {
		alerta: string;
		url_saiba_mais: string | null;
	};
};

export const Alert = async () => {
	const { data: alertData, error } = await api<{
		data: TAlert;
	}>({
		url: '/alerta',
		fetchOptions: {
			cache: 'no-store'
		}
	});

	if (error) return <></>;

	return <AlertClient alertData={alertData} />;
};
