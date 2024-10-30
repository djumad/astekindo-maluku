import pb from '$lib/pb';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const id = params.id as string;
    const sbu = await pb.collection('sertifikat_badan_usaha').getOne(id);
    return {sbu};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default : async({request , params})=>{
        const form = await request.formData();
        const id = params.id as string;
        const namaSbu = form.get('nama_sbu') as string;
        const fotoSbu = form.get('foto_sbu') as File;
        const deskripsi = form.get('deskripsi') as string;
        const data = new FormData();
        const sbu = await pb.collection('sertifikat_badan_usaha').getOne(id);
        data.append('nama_sbu' , namaSbu);
        if(fotoSbu){
            data.append('foto_sbu' , fotoSbu);
        }
        data.append('foto_sbu' , sbu.foto_sbu);
        data.append('deskripsi' , deskripsi);

        const dataSbu = await pb.collection('sertifikat_badan_usaha').update(id , data);
        if(dataSbu){
            throw redirect(302 , '/admin/admin-sbu');
        }
    }
};