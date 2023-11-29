import { json, type RequestHandler } from '@sveltejs/kit';
import { ACCESS_TOKEN } from '$env/static/private';
import api from 'api';
const sdk = api('@payswifter/v2.0#1j722nlji3kbcy');
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
		.then((res: any) => res.data)
		.catch((err: any) => {
			console.error(err);
			return err;
		});
	return json(data);
};
