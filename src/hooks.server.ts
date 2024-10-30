import pb from "$lib/pb";
import { redirect, type Handle } from "@sveltejs/kit";


export const handle : Handle = async({resolve , event})=>{
    const url = event.url;
    if(url.pathname.startsWith("/form-skk")){
        const status = await pb.collection('status').getOne('5vn263jf1n0yhiu') as string;
        console.log(status.status);
        if(status.status !== "aktif"){
            throw redirect(302 , '/');
        }
    }
    if(url.pathname.startsWith("/admin/super-admin")){
        const token = event.cookies.get('token');
        if(!token){
            throw redirect(302 , '/login');
        }
        if(pb.authStore.model.role !== "super_admin"){
            throw redirect(302 , '/login');
        }
        
        event.locals.user = {
            username : pb.authStore.model.username,
            email : pb.authStore.model.email,
            name : pb.authStore.model.name,
            avatar : pb.authStore.model.avatar,
            collectionId : pb.authStore.model.collectionId,
            id : pb.authStore.model.id,
            role : pb.authStore.model.role,
        }
    }
    if(url.pathname.startsWith("/admin/admin-skk")){
        const token = event.cookies.get('token');
        if(!token){
            throw redirect(302 , '/login');
        }
        if(pb.authStore.model.role !== "admin_skk"){
            throw redirect(302 , '/login');
        }
        
        event.locals.user = {
            username : pb.authStore.model.username,
            email : pb.authStore.model.email,
            name : pb.authStore.model.name,
            avatar : pb.authStore.model.avatar,
            collectionId : pb.authStore.model.collectionId,
            id : pb.authStore.model.id,
        }
    }
    if(url.pathname.startsWith("/admin/admin-sbu")){
        const token = event.cookies.get('token');
        if(!token){
            throw redirect(302 , '/login');
        }
        if(pb.authStore.model.role !== "admin_sbu"){
            throw redirect(302 , '/login');
        }
        
        event.locals.user = {
            username : pb.authStore.model.username,
            email : pb.authStore.model.email,
            name : pb.authStore.model.name,
            avatar : pb.authStore.model.avatar,
            collectionId : pb.authStore.model.collectionId,
            id : pb.authStore.model.id,
        }
    }
    if(url.pathname.startsWith("/admin/admin-berita")){
        const token = event.cookies.get('token');
        if(!token){
            throw redirect(302 , '/login');
        }

        if(pb.authStore.model.role !== "admin_berita"){
            throw redirect(302 , '/login');
        }
        
        event.locals.user = {
            username : pb.authStore.model.username,
            email : pb.authStore.model.email,
            name : pb.authStore.model.name,
            avatar : pb.authStore.model.avatar,
            collectionId : pb.authStore.model.collectionId,
            id : pb.authStore.model.id,
        }
    }
    return resolve(event);
}