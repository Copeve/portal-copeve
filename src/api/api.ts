type ResponseData = {};

type ResponseError = {
	error?: {
		status: number;
		name: string;
		message: string;
		details: Record<string, unknown>;
	};
};

export async function api<T = ResponseData>(options: {
	url: string;
	fetchOptions?: RequestInit;
	strapiQueryParams?: string[];
}): Promise<T & ResponseError> {
	const { url, fetchOptions, strapiQueryParams = [] } = options;
	const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api${url}`;

	const resp = await fetch(`${baseUrl}?${strapiQueryParams.join('&')}`, {
		headers: {
			Authorization: process.env.API_AUTH_TOKEN
		},
		...fetchOptions
	});
	const data = await resp.json();
	return data as T & ResponseError;
}
