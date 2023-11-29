import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	return { business: url.searchParams.get('t') == 'business' };
}) satisfies PageLoad;
