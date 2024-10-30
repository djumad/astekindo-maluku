import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import pb from '$lib/pb';

export const load = (async ({locals}) => {
    if(!locals.user){
        throw redirect(302 , '/login');
    }
    const berita = await pb.collection('berita').getList(1 , 50 , {
        expand : 'users_id'
    });
    
    return {
        locals, berita 
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    logout : async({cookies})=>{
        cookies.delete('token' , {path : '/'});
        throw redirect(302 , '/login');
    },
    berita: async ({ request, locals }) => {
        try {
            const form = await request.formData();
            const namaBerita = form.get('nama_berita') as string;
            const fotoBerita = form.get('foto_berita') as File;
            const deskripsiBerita = form.get('deskripsi_berita') as string;
    
            const data = new FormData();
            data.append('nama_berita', namaBerita);
            data.append('foto_berita', fotoBerita);
            data.append('deskripsi_berita', deskripsiBerita);
            data.append('users_id', locals.user.id);
    
            const result = await pb.collection('berita').create(data);
    
            if (result) {
                return { message: 'Success create data skk' };
            }
        } catch (error) {
            console.error('Failed to create record:', error);
            return { error: 'Failed to create SKK record.' };
        }
        throw redirect(302 , '/admin/admin-berita');
    },
    delete : async({url})=>{
        const id  = url.searchParams.get("id") as string;
        await pb.collection('berita').delete(id);
        return redirect(302 , '/admin/admin-berita');
    },
    
};