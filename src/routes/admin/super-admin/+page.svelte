<script lang="ts">
	export let data;
	const user = data.locals.user;
	const skk = data.skk.items;
	const sbu = data.sbu.items;

	// State for controlling modal visibility
	let showModalSkk = false;
	let showModalSBU = false;

	// Modal toggle functions
	const toggleModalSKK = () => {
		showModalSkk = !showModalSkk;
	};
	const toggleModalSBU = () => {
		showModalSBU = !showModalSBU;
	};

	// Input state for SKK and SBU
	let nama_skk = '';
	let foto_skk: File | null = null;
	let deskripsi_skk = '';
	let nama_sbu = '';
	let foto_sbu: File | null = null;
	let deskripsi_sbu = '';

	// File change handlers
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

<style>
	/* General styles */
	.modal-bg {
		background-color: rgba(0, 0, 0, 0.7);
	}
	.modal-content {
		transition: all 0.3s ease-in-out;
	}
	.scale-in {
		transform: scale(0.95);
	}
	.scale-in:hover {
		transform: scale(1);
	}
	.transition-all {
		transition: all 0.3s ease;
	}
	.transition-transform {
		transition: transform 0.3s ease;
	}
	.hover-shadow:hover {
		box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
	}
	.text-shadow {
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
	}
	/* Custom Modal styles */
	.modal {
		background: #fff;
		border-radius: 12px;
		padding: 20px;
		max-width: 500px;
		width: 90%;
	}
	.btn {
		border-radius: 8px;
		padding: 0.5rem 1rem;
		font-weight: 600;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
		transition: background-color 0.2s, transform 0.2s;
	}
	.btn:hover {
		transform: scale(1.05);
	}
	.btn-primary {
		background-color: #3b82f6;
		color: white;
	}
	.btn-primary:hover {
		background-color: #2563eb;
	}
	.btn-danger {
		background-color: #ef4444;
		color: white;
	}
	.btn-danger:hover {
		background-color: #dc2626;
	}
</style>

<div class="container mx-auto p-6">
	<!-- User Profile Section -->
	<div class="flex flex-col items-center mb-8">
		<img
			src={`https://astekindomaluku.pockethost.io/api/files/${user.collectionId}/${user.id}/${user.avatar}`}
			class="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md hover-shadow transition-all mb-4"
			alt={user.username}
		/>
		<h2 class="text-2xl font-semibold text-gray-800 text-shadow">{user.username}</h2>
		<h3 class="text-lg text-gray-600">{user.name}</h3>
		<h4 class="text-gray-500">{user.email}</h4>
	</div>

	<!-- Logout Button -->
	<form action="?/logout" method="post" class="text-center mt-6">
		<button class="btn btn-danger">Logout</button>
	</form>

	<!-- SKK Data Section -->
	<div class="mt-12">
		<div class="flex justify-between items-center mb-6">
			<h3 class="text-xl font-semibold text-gray-800">Data SKK</h3>
			<button class="btn btn-primary" on:click={toggleModalSKK}>Tambah SKK</button>
		</div>

		<div class="overflow-x-auto">
			<table class="min-w-full bg-white border rounded-lg shadow-lg">
				<thead class="bg-gray-200">
					<tr>
						<th class="px-6 py-3 text-left text-gray-700 font-bold">Nama SKK</th>
						<th class="px-6 py-3 text-left text-gray-700 font-bold">Foto SKK</th>
						<th class="px-6 py-3 text-center text-gray-700 font-bold">Action</th>
					</tr>
				</thead>
				<tbody>
					{#each skk as items}
						<tr class="border-t hover:bg-gray-100 transition-colors duration-200">
							<td class="px-6 py-4">{items.nama_skk}</td>
							<td class="px-6 py-4">
								<img
									class="w-32 h-32 object-cover rounded-lg scale-in transition-transform duration-500 hover:scale-110 shadow-md"
									src={`https://astekindomaluku.pockethost.io/api/files/${items.collectionId}/${items.id}/${items.foto_skk}`}
									alt={items.nama_skk}
								/>
							</td>
							<td class="px-6 py-4 text-center">
								<a
									href="/admin/super-admin/skk/{items.id}"
									class="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 p-2 rounded-lg mx-1 shadow-lg"
								>
									Update
								</a>
								<form action="?/delete&id={items.id}" method="post" class="inline">
									<button type="submit" class="btn btn-danger mx-1">Delete</button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<!-- SBU Data Section -->
	<div class="mt-12">
		<div class="flex justify-between items-center mb-6">
			<h3 class="text-xl font-semibold text-gray-800">Data SBU</h3>
			<button class="btn btn-primary" on:click={toggleModalSBU}>Tambah SBU</button>
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
									class="w-32 h-32 object-cover rounded-lg scale-in transition-transform duration-500 hover:scale-110 shadow-md"
									src={`https://astekindomaluku.pockethost.io/api/files/${items.collectionId}/${items.id}/${items.foto_sbu}`}
									alt={items.nama_sbu}
								/>
							</td>
							<td class="px-6 py-4 text-center">
								<a
									href="/admin/super-admin/sbu/{items.id}"
									class="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 p-2 rounded-lg mx-1 shadow-lg"
								>
									Update
								</a>
								<form action="?/delete&id={items.id}" method="post" class="inline">
									<button type="submit" class="btn btn-danger mx-1">Delete</button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Modal Add SKK -->
	{#if showModalSkk}
	<div class="modal-bg fixed inset-0 z-40 flex items-center justify-center">
		<div class="modal shadow-xl p-6 relative">
			<h3 class="text-xl font-semibold mb-4">Tambah Data SKK</h3>
			<form method="post" action="?/skk" enctype="multipart/form-data">
				<div class="mb-4">
					<label class="block text-gray-700 font-semibold mb-2">Nama SKK:</label>
					<input
						type="text"
						name="nama_skk"
						bind:value={nama_skk}
						placeholder="Masukkan nama SKK"
						class="w-full px-4 py-2 border rounded-lg"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-semibold mb-2">Foto SKK:</label>
					<input
						type="file"
						name="foto_skk"
						accept="image/*"
						on:change={handleFileChange}
						class="w-full px-4 py-2 border rounded-lg"
						required
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-semibold mb-2">Deskripsi SKK:</label>
					<textarea
						name="deskripsi_skk"
						bind:value={deskripsi_skk}
						placeholder="Deskripsikan SKK"
						rows="5"
						class="w-full px-4 py-2 border rounded-lg"
						required
					></textarea>
				</div>
				<div class="flex justify-end">
					<button type="button" on:click={toggleModalSKK} class="btn btn-secondary mr-2">Cancel</button>
					<button type="submit" class="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	</div>
{/if}


	<!-- Modal Add SBU -->
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


</div>
