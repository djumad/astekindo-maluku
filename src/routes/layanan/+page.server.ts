import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const layanan = await pb.collection('layanan').getList(1 , 50 , {
        expand : 'users_id'
    });
    return {layanan};
}) satisfies PageServerLoad;