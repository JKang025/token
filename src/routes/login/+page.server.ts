import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "../$types"
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'


export const actions = {
	login: async ({request, locals} : {request: any, locals:any}) => {
        const body = await request.formData();
        const email = body.get('email');
        const password = body.get('password');
        
		try {
            const { data, error } = await locals.supabase.auth.signInWithPassword({
                email: email as string,
                password: password as string
            });

            if (error) {
                // Handle the error, e.g., by returning a specific response or setting an error message
                console.error(error.message);
                return fail(401, { error: error.message });
            }


            throw redirect(303, "/");
        } catch (err) {
            // Handle any unexpected errors
            return fail(500, { error: 'Internal Server Error' });
        }

	}
}