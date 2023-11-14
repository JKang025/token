import { json, type RequestHandler } from '@sveltejs/kit';
import sdk from '@api/payswifter';
import { ACCESS_TOKEN } from '$env/static/private';
sdk.server('https://api-sandbox.swifterhq.com/api/v2.0');
sdk.auth(ACCESS_TOKEN);

export const POST: RequestHandler = async ({ request }) => {
	const { first_name, last_name, amount } = await request.json();
	const data = await sdk
		.create_session({
			type: 'consumer_checkout',
			consumer_info: { first_name, last_name },
			amount
		})
		.then((res) => res.data)
		.catch((err) => console.error(err));
	return json(data);
};
