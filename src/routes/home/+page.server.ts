import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		// return;
		throw redirect(303, '/');
	}

	const { data: profile } = await supabase
		.from('profiles')
		.select(`username, full_name, website, avatar_url`)
		.eq('id', session.user.id)
		.single();

	// get data and rename variable
	const { data: transactions } = await supabase
		.from('transactions')
		.select('id, full_name, amount, timestamp')
		.order('timestamp', { ascending: false });

	return { session, profile, transactions };
};
