import { json, type RequestHandler } from '@sveltejs/kit';
import api from 'api';
const sdk = api('@payswifter/v2.0#1j722nlji3kbcy');
sdk.server('https://api-sandbox.swifterhq.com/api/v2.0');

export const POST: RequestHandler = async ({ request }) => {
	const { session_id, token } = await request.json();
	sdk.auth(token);
	const data = await sdk
		.create_order({
			session_id
		})
		.then((res: any) => res.data)
		.catch((err: any) => console.error(err));
	return json(data);
};
