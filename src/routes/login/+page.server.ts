import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import pb from '$lib/pb';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email') as string;
        const password = form.get('password') as string;

        let auth;
        try {
            auth = await pb.collection('users').authWithPassword(email, password);
        } catch (error) {
            console.error('Authentication error:', error);
            return { status: 302, redirect: '/login'  , error : "Username dan password salah"};
        }

        if (!pb.authStore.token || !pb.authStore.model) {
            return { status: 302, redirect: '/login' };
        }

        console.log(pb.authStore.token);
        console.log(pb.authStore.model.role);

        // Pengaturan cookies dan redirect berdasarkan role
        if (pb.authStore.model.role === 'super_admin') {
            cookies.set('token', pb.authStore.token, {
                path: '/',
                httpOnly: true,
                secure: true
            });
			return redirect(302 , '/admin/super-admin');
        } else if (pb.authStore.model.role === 'admin_skk') {
            cookies.set('token', pb.authStore.token, {
                path: '/',
                httpOnly: true,
                secure: true
            });
            return redirect(302 , '/admin/admin-skk');
        } else if (pb.authStore.model.role === 'admin_sbu') {
            cookies.set('token', pb.authStore.token, {
                path: '/',
                httpOnly: true,
                secure: true
            });
			return redirect(302 , '/admin/admin-sbu');
        } else if (pb.authStore.model.role === 'admin_berita') {
            cookies.set('token', pb.authStore.token, {
                path: '/',
                httpOnly: true,
                secure: true
            });
            return redirect(302 , '/admin/admin-berita');
        }

        return {error : "email dan password"}; 
    }
};

