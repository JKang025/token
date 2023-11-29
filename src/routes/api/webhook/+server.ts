import type { RequestHandler } from '@sveltejs/kit';
// import { createVerify } from 'crypto';
// import api from 'api';
// const sdk = api('@payswifter/v2.0#1j722nlji3kbcy');
// sdk.server('https://api-sandbox.swifterhq.com/api/v2.0');

export const POST: RequestHandler = async ({ request }) => {
	// console.log(request.headers);
	// verify HMAC signature
	// const signed_payload = `${request.headers.get('X-Swifter-Signature')}.${request.body}`;
	// const verifier = createVerify('sha256');
	return new Response();
};
