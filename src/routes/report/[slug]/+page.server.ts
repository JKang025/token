import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals: { supabase } }) => {
	const { data: transaction } = await supabase
		.from('transactions')
		.select('id, full_name, amount, timestamp, track_number, phone')
		.eq('id', params.slug)
		.single();

	if (!transaction) {
		throw redirect(303, '/home');
	}

	return { transaction };
};
