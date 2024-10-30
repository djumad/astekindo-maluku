<script>
	import '../app.css';
	import "aos/dist/aos.css";
	import Aos from 'aos';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    export let data;
    const status = data.status;
	onMount(()=>{
		Aos.init();
	})
</script>

<svelte:head>
	<title>Astekindo Maluku</title>
</svelte:head>

<!-- Navbar -->
<script context="module" lang="ts">
    // Fungsi untuk memeriksa URL
    export const match = ({ url }) => {
        // Cek jika URL bukan /login atau /admin
        return !/^\/login(\/.*)?$/.test(url.pathname) && !/^\/admin(\/.*)?$/.test(url.pathname) && !/^\/form-skk(\/.*)?$/.test(url.pathname);
    };
    
</script>

{#if match($page)}
    <nav
        class="bg-white border border-blue-300 w-[95%] mx-auto rounded-l-full rounded-r-full p-4 text-gray-800 shadow-lg transition duration-300 hover:shadow-xl mt-1.5 sticky top-0 z-50"
    >
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <div class="text-2xl font-bold ml-3">
                <a href="/" class="hover:text-blue-600 transition duration-200">Astekindo Maluku</a>
            </div>

            <!-- Menu Items -->
            <ul class="flex space-x-6">
                <li><a href="/" class="hover:text-blue-600 transition duration-200">Beranda</a></li>
                <li><a href="/galeri" class="hover:text-blue-600 transition duration-200">Galeri</a></li>
                <li><a href="/layanan" class="hover:text-blue-600 transition duration-200">Layanan</a></li>
                <li>
                    {#each status as items}
                        {#if items.status == "aktif"}   
                            <a href="/form-skk" class="hover:text-blue-600 transition duration-200">Form Pendaftaran</a>
                        {/if}
                    {/each}
                </li>
            </ul>
            
        </div>
    </nav>
{/if}

<slot />


{#if $page.url.pathname !== '/login' && $page.url.pathname !== "/form-skk"}
	<footer class="bg-gray-800 text-white py-4">
		<div class="text-center mt-4">
			<p class="text-sm">© 2024 Astekindo Maluku. All rights reserved.</p>
		</div>
	</footer>
{/if}
