import pb from '$lib/pb';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const id = params.id as string;
    const skk = await pb.collection('sertivikat_kopetensi_kerja').getOne(id);
    return {skk};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default : async({request , params})=>{
        const form = await request.formData();
        const id = params.id as string;
        const namaSkk = form.get('nama_skk') as string;
        const fotoSkk = form.get('foto_skk') as File;
        const deskripsi = form.get('deskripsi_skk') as string;
        const skk = await pb.collection('sertivikat_kopetensi_kerja').getOne(id);
        const data = new FormData();
        data.append('nama_skk' , namaSkk);
        if(fotoSkk){
            data.append('foto_skk' , fotoSkk);
        }
        data.append('foto_skk' , skk.foto_skk);
        data.append('deskripsi_skk' , deskripsi);

        const dataSkk = await pb.collection('sertivikat_kopetensi_kerja').update(id , data);
        if(dataSkk){
            throw redirect(302 , '/admin/super-admin')
        }
    }
};