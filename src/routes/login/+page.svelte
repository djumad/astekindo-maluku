<script lang="ts">
    export let form;

    const response = form?.error;

    let showModal = !!response; // Jika ada response, modal akan terbuka

    const closeModal = () => {
        showModal = false;
    };

    if (response) {
        console.log(response);
    }
</script>

<section class="min-h-screen flex">
    <!-- Left side with the title "Astekindo" -->
    <div class="w-1/2 bg-blue-600 flex items-center justify-center">
        <h1 class="text-6xl font-bold text-white">Astekindo</h1>
    </div>

    <!-- Right side with the login form -->
    <div class="w-1/2 flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

            <form method="POST" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Masukkan email"
                        required
                    />
                </div>

                <!-- Password Input -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Masukkan password"
                        required
                    />
                </div>

                <!-- Submit Button -->
                <div>
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

<!-- Modal -->
{#if showModal}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center">
            <h3 class="text-xl font-semibold mb-4">Terjadi Kesalahan</h3>
            <p class="text-gray-700 mb-6">{response}</p>
            <button
                on:click={closeModal}
                class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
                Tutup
            </button>
        </div>
    </div>
{/if}
