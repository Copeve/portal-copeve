type ResponseData = {};

export async function api<T = ResponseData>(
	url: string,
	options?: RequestInit
): Promise<T> {
	const resp = await fetch(`http://127.0.0.1:1337/api${url}`, {
		headers: {
			Authorization:
				'Bearer eb30151349c5ca275d5ac2af707a9196b4cd2f3a88784d00f0c2d49b8c5170a0dc99a11556e24fd6b54524575dbd3bfe4606c9010f73d591f2f65c52bd81f1fc296a69f25ed26925aca532ab52e5a04eccf066fceabc669b5b2fd93a2f91828acf89949bb69acac104b530934ef05420cdf92eace55f3b29c0bc7f65d40862b8'
		},
		...options
	});
	const data = await resp.json();
	return data as T;
}
