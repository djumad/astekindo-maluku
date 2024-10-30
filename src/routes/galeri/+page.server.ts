import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const skk = await pb.collection('sertivikat_kopetensi_kerja').getList(1 , 50 , {
        expand : 'users_id'
    });
    const sbu = await pb.collection('sertifikat_badan_usaha').getList(1 , 50 , {
        expand : 'users_id'
    })
    const tim = await pb.collection('tim_astekindo').getList(1 , 50 , {
        expand : 'users_id'
    })
    return {
        skk, tim, sbu
    }
}) satisfies PageServerLoad;