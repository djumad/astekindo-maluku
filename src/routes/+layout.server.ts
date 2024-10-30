import pb from '$lib/pb';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    const status = await pb.collection('status').getFullList();
    return {status};
}) satisfies LayoutServerLoad;