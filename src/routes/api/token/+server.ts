import { json, type RequestHandler } from '@sveltejs/kit';
import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

export const GET: RequestHandler = async () => {
	// const auth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
	const { data } = await axios.post(
		'https://auth-sandbox.swifterhq.com/oauth2/token',
		{
			grant_type: 'client_credentials'
		},
		{
			auth: {
				username: CLIENT_ID,
				password: CLIENT_SECRET
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
				// 'Authorization': `Basic ${auth}`
			}
		}
	);
	return json(data);
};

/*
status: 401
data: { message: 'authentication error' }
*/
