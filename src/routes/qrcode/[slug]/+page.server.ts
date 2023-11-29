import { URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function load({ locals: { supabase, getSession } }) {
	const session = await getSession();

	if (!session) {
		// return;
		throw redirect(303, '/');
	}

	const { data: profile } = await supabase
		.from('profiles')
		.select(`username, full_name`)
		.eq('id', session.user.id)
		.single();

	return {
		url: URL,
		profile
	};
}
