<script lang="ts">
    export let data;
    const { berita } = data;
</script>

<div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">Edit Berita Details</h2>
    <form method="post" class="space-y-4" enctype="multipart/form-data">
        <!-- Name Input -->
        <div>
            <label for="nama_berita" class="block text-sm font-medium text-gray-700">Nama Berita</label>
            <input 
                type="text" 
                name="nama_berita" 
                value={berita.nama_berita} 
                class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
        </div>
        
        <!-- File Input -->
        <div>
            <label for="foto_berita" class="block text-sm font-medium text-gray-700">Foto Berita</label>
            <input 
                type="file" 
                name="foto_berita" 
                class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        <!-- Description Textarea -->
        <div>
            <label for="deskripsi_berita" class="block text-sm font-medium text-gray-700">Deskripsi Berita</label>
            <textarea 
                name="deskripsi_berita" 
                class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >{berita.deskripsi_berita}</textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
            <button 
                type="submit" 
                class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save Changes
            </button>
        </div>
    </form>

    <!-- Image Display -->
    <div class="mt-6 text-center">
        <img 
            class="w-32 h-32 object-cover rounded-lg transition-transform duration-500 hover:scale-110 shadow-lg mx-auto" 
            src={`https://astekindomaluku.pockethost.io/api/files/${berita.collectionId}/${berita.id}/${berita.foto_berita}`} 
            alt={berita.nama_berita} 
        />
    </div>
</div>
