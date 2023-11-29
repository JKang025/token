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
		const fullName = body.get('firstName') + ' ' + body.get('lastName');
        console.log(email);
		console.log(password);
		console.log(phone);
		console.log(fullName);
		

        
		const { data, err } = await locals.supabase.auth.signUp({
            
            email: email as string,
            password: password as string,
			
			options: {
				data: {
				  phone: phone as string,
				  full_name: fullName as string
				}
			}
			
        })
        

    

        throw redirect(303, "/verify")

	}
}