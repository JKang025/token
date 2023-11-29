import type { PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit"


export const actions = {
	submit: async ({request, locals} : {request: any, locals:any}) => {
		const body = await request.formData()
       
        const zipcode = body.get('zipcode');
        const routingNum = body.get('routing-number');
		const AccountNum = body.get('account-number');
        console.log(zipcode);
		console.log(routingNum);
		console.log(AccountNum);
		
    

    

        throw redirect(303, "/")

	}
}