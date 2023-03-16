import { API_URL } from './consts.js';
import type { Endpoint, EndpointsToOperations } from './types.js';

/* Used browser side */
export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {
	const url = `${API_URL}${endpoint}`;

	console.log(`Fetching ${url}`);
	return fetch(url).then((r) => r.json()) as unknown as Promise<
		ReturnType<EndpointsToOperations[Selected]>
	>;
}