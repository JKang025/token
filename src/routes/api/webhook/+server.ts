// import { json, type RequestHandler } from '@sveltejs/kit';
// import { createVerify } from 'crypto';
// import sdk from '@api/payswifter';
// import { ACCESS_TOKEN } from '$env/static/private';
// sdk.server('https://api-sandbox.swifterhq.com/api/v2.0');
// sdk.auth(ACCESS_TOKEN);

// export const POST: RequestHandler = async ({ request }) => {
// 	console.log(request.headers);
// 	// verify HMAC signature
// 	const signed_payload = `${request.headers.get('X-Swifter-Signature')}.${request.body}`;
// 	const verifier = createVerify('sha256');
// };
