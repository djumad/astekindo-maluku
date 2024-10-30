<script lang="ts">
	export let data;
	const user = data.locals.user;
	const berita = data.berita.items;
	let showModalBerita = false;

	const toggleModalBerita = () => {
		showModalBerita = !showModalBerita;
	};

	let nama_berita = '';
	let foto_berita: File | null = null;
	let deskripsi_berita = '';

	const handleFileChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			foto_berita = target.files[0];
		}
	};
</script>

<div class="container mx-auto p-6">
	<!-- User Profile Section -->
	<div class="flex flex-col items-center">
		<img
			src={`https://astekindomaluku.pockethost.io/api/files/${user.collectionId}/${user.id}/${user.avatar}`}
			class="w-28 h-28 rounded-full border-4 border-gray-300 shadow-lg mb-4"
			alt={user.username}
		/>
		<h2 class="text-2xl font-semibold text-gray-800">{user.username}</h2>
		<h3 class="text-lg text-gray-600">{user.name}</h3>
		<h4 class="text-gray-500">{user.email}</h4>
	</div>

	<!-- Logout Button -->
	<form action="?/logout" method="post" class="mt-6">
		<button
			class="bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded p-3 text-white shadow-lg"
		>
			Logout
		</button>
	</form>

	<!-- berita Data Section -->
	<div class="mt-8">
		<div class="flex justify-between items-center mb-4">
			<h3 class="text-xl font-semibold text-gray-800">Data Berita</h3>
			<button
				class="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 p-2 text-white rounded-md shadow-md"
				on:click={toggleModalBerita}
			>
				Tambah Berita
			</button>
		</div>

		<div class="overflow-x-auto">
			<table class="min-w-full bg-white border rounded-lg shadow-lg">
				<thead class="bg-gray-200">
					<tr>
						<th class="px-6 py-3 text-left text-gray-700 font-bold">Nama Berita</th>
						<th class="px-6 py-3 text-left text-gray-700 font-bold">Foto Berita</th>
						<th class="px-6 py-3 text-center text-gray-700 font-bold">Action</th>
					</tr>
				</thead>
				<tbody>
					{#each berita as items}
						<tr class="border-t hover:bg-gray-100 transition-colors duration-200">
							<td class="px-6 py-4">{items.nama_berita}</td>
							<td class="px-6 py-4">
								<img
									class="w-32 h-32 object-cover rounded-lg transition-transform duration-500 hover:scale-110 shadow-lg"
									src={`https://astekindomaluku.pockethost.io/api/files/${items.collectionId}/${items.id}/${items.foto_berita}`}
									alt={items.nama_berita}
								/>
							</td>
							<td class="px-6 py-4 text-center">
								<a
									href="/admin/admin-berita/{items.id}"
									class="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 p-2 rounded-lg mx-1 shadow-lg"
								>
									Update
								</a>
								<form action="?/delete&id={items.id}" method="post" class="inline">
									<button
										type="submit"
										class="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white p-2 rounded-lg mx-1 shadow-lg"
									>
										Delete
									</button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
    
</div>
<!-- Modal for Adding Berita -->
{#if showModalBerita}
	<div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
		<!-- Modal Content -->
		<div class="bg-white w-full max-w-full rounded-lg shadow-lg p-6 mx-4 h-full overflow-y-auto">
			<h3 class="text-2xl font-bold mb-4 text-gray-800">Tambah Berita</h3>

			<!-- Form for adding Berita -->
			<form method="post" action="?/berita" enctype="multipart/form-data">
				<div class="mb-4">
					<label class="block text-gray-700">Nama Berita</label>
					<input
						bind:value={nama_berita}
						type="text"
						name="nama_berita"
						class="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
						placeholder="Masukkan nama Berita"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700">Foto Berita</label>
					<input
						on:change={handleFileChange}
						name="foto_berita"
						type="file"
						class="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700">Deskripsi Berita</label>
					<textarea
						bind:value={deskripsi_berita}
						name="deskripsi_berita"
						class="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-400 outline-none h-64"
						placeholder="Masukkan deskripsi Berita"
					></textarea>
				</div>
				<div class="flex justify-end">
					<button
						type="button"
						class="bg-red-500 text-white p-3 rounded-md mr-3 hover:bg-red-600 transition-colors duration-300"
						on:click={toggleModalBerita}
					>
						Batal
					</button>
					<button
						type="submit"
						class="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
					>
						Tambah
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}
 