import pb from '$lib/pb';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const id = params.id as string;
    const berita = await pb.collection('berita').getOne(id);
    return {berita};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default : async({request , params})=>{
        const form = await request.formData();
        const id = params.id as string;
        const namaBerita = form.get('nama_berita') as string;
        const fotoBerita = form.get('foto_berita') as File;
        const deskripsi = form.get('deskripsi_berita') as string;
        const data = new FormData();
        const berita = await pb.collection('berita').getOne(id);
        data.append('nama_berita' , namaBerita);
        if(fotoBerita){
            data.append('foto_berita' , fotoBerita);
        }
        data.append('foto_berita' , berita.foto_berita);
        data.append('deskripsi_berita' , deskripsi);

        const dataSbu = await pb.collection('berita').update(id , data);
        if(dataSbu){
            throw redirect(302 , '/admin/admin-berita')
        }
    }
};