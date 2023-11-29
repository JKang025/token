import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	return { id: url.searchParams.get('id') };
}) satisfies PageLoad;
