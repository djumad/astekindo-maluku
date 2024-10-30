<script lang="ts">
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
	<div class="w-full max-w-lg p-8 bg-white rounded shadow-md">
		<h2 class="text-2xl font-bold text-center mb-6">Formulir Pendaftaran</h2>
		<form  method="POST" enctype="multipart/form-data" class="space-y-4">
			<!-- NAMA LENGKAP -->
			<div>
				<label for="nama" class="block font-medium">Nama Lengkap Sesuai KTP</label>
				<input
					type="nama"
					id="nama"
					name="nama_lengkap"
					class="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
					required
				/>
			</div>
			<!-- NIK -->
			<div>
				<label for="nik" class="block font-medium">NIK</label>
				<input
					type="text"
					id="nik"
					name="nik"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Nomor WA -->
			<div>
				<label for="nomor_wa" class="block font-medium">Nomor WA</label>
				<input
					type="text"
					id="nomor_wa"
					name="nomor_wa"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Email -->
			<div>
				<label for="email" class="block font-medium">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Tempat Lahir -->
			<div>
				<label for="tempat_lahir" class="block font-medium">Tempat Lahir</label>
				<input
					type="text"
					id="tempat_lahir"
					name="tempat_lahir"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>
			<!-- Tanggal Lahir -->
			<div>
				<label for="tanggal_lahir" class="block font-medium">Tanggal Lahir</label>
				<input
					type="date"
					id="tanggal_lahir"
					name="tanggal_lahir"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Jenis Kelamin -->
			<div>
				<label for="jenis_kelamin" class="block font-medium">Jenis Kelamin</label>
				<select
					id="jenis_kelamin"
					name="jenis_kelamin"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				>
					<option value="L">Laki-Laki</option>
					<option value="P">Perempuan</option>
				</select>
			</div>

			<!-- Jenjang Ijasa -->
			<div>
				<label for="jenjang_ijasa" class="block font-medium">Jenjang Ijasa</label>
				<input
					type="text"
					id="jenjang_ijasa"
					name="jenjang_ijasa"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Tahun Lulus -->
			<div>
				<label for="tahun_lulus" class="block font-medium">Tahun Lulus Pendidikan</label>
				<input
					type="number"
					id="tahun_lulus"
					name="tahun_lulus"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Foto Ijasa -->
			<div>
				<label for="foto_ijasa" class="block font-medium">Foto Ijasa</label>
				<input
					type="file"
					id="foto_ijasa"
					name="foto_ijasa"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Foto KTP -->
			<div>
				<label for="foto_ktp" class="block font-medium">Foto KTP</label>
				<input
					type="file"
					id="foto_ktp"
					name="foto_ktp"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Foto Latar Belakang Merah -->
			<div>
				<label for="foto_latar_belakang_merah" class="block font-medium"
					>Foto Latar Belakang Merah</label
				>
				<input
					type="file"
					id="foto_latar_belakang_merah"
					name="foto_latar_belakang_merah"
					required
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- NPWP (Tidak Wajib) -->
			<div>
				<label for="npwp" class="block font-medium">NPWP (Opsional)</label>
				<input
					type="text"
					id="npwp"
					name="npwp"
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- User E Simpan (Tidak Wajib) -->
			<div>
				<label for="user_e_simpan" class="block font-medium">User E Simpan (Opsional)</label>
				<input
					type="text"
					id="user_e_simpan"
					name="user_e_simpan"
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Password E Simpan (Tidak Wajib) -->
			<div>
				<label for="password_e_simpan" class="block font-medium">Password E Simpan (Opsional)</label
				>
				<input
					type="password"
					id="password_e_simpan"
					name="password_e_simpan"
					class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
				/>
			</div>

			<!-- Submit Button -->
			<div>
				<button
					type="submit"
					class="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Simpan</button
				>
			</div>
		</form>
	</div>
</div>
