import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "../../$types"
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'


export const actions = {
	register: async ({request, locals} : {request: any, locals:any}) => {
		const body = await request.formData()
       
        const email = body.get('email');
        const password = body.get('password');
		const phone = body.get('phone');
		const firstName = body.get('firstName');
		const lastName = body.get('lastName');
        console.log(email);
		console.log(password);
		console.log(phone);
		console.log(firstName);
		console.log(lastName);

        
		const { data, err } = await locals.supabase.auth.signUp({
            
            email: email as string,
            password: password as string,
			options: {
				data: {
				  phone: phone as string
				}
			}
        })
        
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
    

        //throw redirect(303, "/signup/enterPhone")

	}
}