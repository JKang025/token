async function getToken(): Promise<string> {
	const { access_token } = await fetch('/api/token').then((res) => res.json());
	console.log(access_token);
	return access_token;
}

export default getToken;
