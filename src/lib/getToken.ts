async function getToken(): Promise<string> {
	const { access_token } = await fetch('/api/token').then((res) => res.json());
	return access_token;
}

export default getToken;
