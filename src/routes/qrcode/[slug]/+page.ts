export function load({ params, data }) {
	return { ...data, slug: params.slug };
}
