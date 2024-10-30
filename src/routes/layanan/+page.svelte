<script lang="ts">
    export let data;
    const layanan = data.layanan.items;
</script>

<section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Layanan Kami</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each layanan as item}
                <div class="group bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
                    <img
                        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        src="https://astekindomaluku.pockethost.io/api/files/{item.collectionId}/{item.id}/{item.foto_layanan}"
                        alt={item.nama_layanan}
                    />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500">{item.nama_layanan}</h3>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
