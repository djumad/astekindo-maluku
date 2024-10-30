import pb from '$lib/pb';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const status = await pb.collection('status').getOne('5vn263jf1n0yhiu') as string;
    
    if(status.status !== "aktif"){
        throw redirect(302 , '/');
    }
}) satisfies PageServerLoad;

export const actions: Actions = {
    default : async({request})=>{
        const form = await request.formData();
        
    }
};