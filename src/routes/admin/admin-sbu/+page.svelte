<script lang="ts">
	export let data;
	const user = data.locals.user;
	const sbu = data.sbu.items;

	let showModalSBU = false;

	// Function to handle modal toggle
	const toggleModalSBU = () => {
		showModalSBU = !showModalSBU;
	};

	let nama_skk = '';
	let foto_skk: File | null = null;
	let deskripsi_skk = '';

	let nama_sbu = '';
	let foto_sbu: File | null = null;
	let deskripsi_sbu = '';

	const handleFileChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			foto_skk = target.files[0];
		}
	};
	const handleFileChangeSbu = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			foto_sbu = target.files[0];
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
    
</div>

<div class="mt-8">
	<div class="flex justify-between items-center mb-4">
		<h3 class="text-xl font-semibold text-gray-800">Data SBU</h3>
		<button
			class="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 p-2 text-white rounded-md shadow-md"
			on:click={toggleModalSBU}
		>
			Tambah SBU
		</button>
	</div>

	<div class="overflow-x-auto">
		<table class="min-w-full bg-white border rounded-lg shadow-lg">
			<thead class="bg-gray-200">
				<tr>
					<th class="px-6 py-3 text-left text-gray-700 font-bold">Nama SBU</th>
					<th class="px-6 py-3 text-left text-gray-700 font-bold">Foto SBU</th>
					<th class="px-6 py-3 text-center text-gray-700 font-bold">Action</th>
				</tr>
			</thead>
			<tbody>
				{#each sbu as items}
					<tr class="border-t hover:bg-gray-100 transition-colors duration-200">
						<td class="px-6 py-4">{items.nama_sbu}</td>
						<td class="px-6 py-4">
							<img
								class="w-32 h-32 object-cover rounded-lg transition-transform duration-500 hover:scale-110 shadow-lg"
								src={`https://astekindomaluku.pockethost.io/api/files/${items.collectionId}/${items.id}/${items.foto_sbu}`}
								alt={items.nama_sbu}
							/>
						</td>
						<td class="px-6 py-4 text-center">
							<a
								href="/admin/sbu/{items.id}"
								class="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 p-2 rounded-lg mx-1 shadow-lg"
							>
								Update
							</a>
							<form action="?/delete_sbu&id={items.id}" method="post" class="inline">
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

{#if showModalSBU}
	<div class="modal-bg fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
		<div class="modal shadow-2xl p-10 relative w-10/12 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-4xl bg-white rounded-lg">
			<h3 class="text-3xl font-bold mb-8">Tambah Data SBU</h3>
			<form method="post" enctype="multipart/form-data">
				<div class="mb-6">
					<label class="block text-gray-800 font-semibold mb-2 text-lg">Nama SBU:</label>
					<input
						type="text"
						name="nama_sbu"
						bind:value={nama_sbu}
						placeholder="Masukkan nama SBU"
						class="w-full px-4 py-3 border rounded-lg text-lg"
						required
					/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-800 font-semibold mb-2 text-lg">Foto SBU:</label>
					<input
						type="file"
						name="foto_sbu"
						accept="image/*"
						on:change={handleFileChangeSbu}
						class="w-full px-4 py-3 border rounded-lg text-lg"
						required
					/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-800 font-semibold mb-2 text-lg">Deskripsi SBU:</label>
					<textarea
						name="deskripsi_sbu"
						bind:value={deskripsi_sbu}
						placeholder="Deskripsikan SBU"
						rows="5"
						class="w-full px-4 py-3 border rounded-lg text-lg"
						required
					></textarea>
				</div>
				<div class="flex justify-end">
					<button type="button" on:click={toggleModalSBU} class="btn btn-secondary mr-4 text-lg px-6 py-3">Cancel</button>
					<button type="submit" class="btn btn-primary text-lg px-6 py-3">Submit</button>
				</div>
			</form>
		</div>
	</div>
{/if}
