import { json, type RequestHandler } from '@sveltejs/kit';
import sdk from '@api/payswifter';
import { ACCESS_TOKEN } from '$env/static/private';
sdk.server('https://api-sandbox.swifterhq.com/api/v2.0');
sdk.auth(ACCESS_TOKEN);

export const POST: RequestHandler = async ({ request }) => {
	const { session_id } = await request.json();
	const data = await sdk
		.create_order({
			session_id
		})
		.then((res) => res.data)
		.catch((err) => console.error(err));
	return json(data);
};
