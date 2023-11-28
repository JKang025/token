import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "../../$types"
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'


export const actions = {
	register: async ({request, locals} : {request: any, locals:any}) => {
		const body = await request.formData()
       
        const email = body.get('email');
        const password = body.get('password');
        console.log(email);

        
		const { data, err } = await locals.supabase.auth.signUp({
            
            email: email as string,
            password: password as string
           
        })
        
        /*
        const { data, err } = await locals.supabase.auth.signUp({
            email: 'ex13223@email.com',
            password: 'example-password',
        })
        */

        
		if (err) {
			if (err.status === 400) {
				return fail(400, {
					error: "Invalid email or password",
				})
			}
			return fail(500, {
				error: "Server error. Please try again later.",
			})
		}
    

        throw redirect(303, "/customsignup/enterEmail")

	}
}