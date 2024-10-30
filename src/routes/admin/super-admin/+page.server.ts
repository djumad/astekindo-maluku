import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import pb from '$lib/pb';

export const load = (async ({locals}) => {
    if(!locals.user){
        throw redirect(302 , '/login');
    }
    const skk = await pb.collection('sertivikat_kopetensi_kerja').getList(1 , 50 , {
        expand : 'users_id'
    });

    const sbu = await pb.collection('sertifikat_badan_usaha').getList(1 , 50 , {
        expand : 'users_id'
    });
    
    return {
        locals, skk , sbu
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    logout : async({cookies})=>{
        cookies.delete('token' , {path : '/'});
        throw redirect(302 , '/login');
    },
    skk : async ({ request, locals }) => {
        try {
            const form = await request.formData();
            const namaSkk = form.get('nama_skk') as string;
            const fotoSkk = form.get('foto_skk') as File;
            const deskripsiSkk = form.get('deskripsi_skk') as string;
    
            const data = new FormData();
            data.append('nama_skk', namaSkk);
            data.append('foto_skk', fotoSkk);
            data.append('deskripsi_skk', deskripsiSkk);
            data.append('users_id', locals.user.id);
    
            const result = await pb.collection('sertivikat_kopetensi_kerja').create(data);
    
            if (result) {
                return { message: 'Success create data skk' };
            }
        } catch (error) {
            console.error('Failed to create record:', error);
            return { error: 'Failed to create SKK record.' };
        }
        throw redirect(302 , '/admin/super-admin');
    },
    sbu : async({request , locals})=>{
        try {
            const form = await request.formData();
            const namaSbu = form.get("nama_sbu") as string;
            const fotoSbu = form.get("foto_sbu") as string;
            const deskripsiSbu = form.get("deskripsi") as string;

            const data = new FormData();
            data.append('nama_sbu' , namaSbu);
            data.append('foto_sbu' , fotoSbu);
            data.append('deskripsi' , deskripsiSbu);
            data.append('users_id' , locals.user.id);
            const sbu = await pb.collection('sertifikat_badan_usaha').create(data);
            if(sbu){
                console.log("Success");
            }
        } catch (error) {
            console.log(error);
        }
        throw redirect(302 , '/admin/super-admin');
    },
    delete : async({url})=>{
        const id  = url.searchParams.get("id") as string;
        await pb.collection('sertivikat_kopetensi_kerja').delete(id);
        return redirect(302 , '/admin/super-admin');
    },
    delete_sbu : async({url})=>{
        const id  = url.searchParams.get("id") as string;
        await pb.collection('sertifikat_badan_usaha').delete(id);
        return redirect(302 , '/admin/super-admin');
    },

    
};