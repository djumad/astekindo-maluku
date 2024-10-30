<script lang="ts">
	export let data;
	const skk = data.skk.items;
	const sbu = data.sbu.items;
	const tim = data.tim.items;
	const berita = data.berita.items;
	const lokasi = data.lokasi.items;

</script>



<!-- Main Content -->
<div class="flex justify-between items-start w-[95%] mx-auto mt-8" data-aos="zoom-in">
	<!-- Bagian kiri -->
	<div class="w-1/2 m-5">
		<!-- Judul tebal -->
		<p class="font-bold text-5xl mb-4">Astekindo Maluku</p>

		<!-- Justify paragraf -->
			<div class="w-full mx-auto "> <!-- Changed max-w-lg to w-full -->
			<p class="text-justify mb-4 w-full">
				Astekindo adalah singkatan dari Asosiasi Tenaga Teknik Indonesia. Ini adalah organisasi yang
				dibentuk untuk menghimpun para profesional teknik di Indonesia, baik yang bekerja di sektor
				pemerintah maupun swasta. Tujuan utama dari Astekindo adalah untuk meningkatkan kompetensi,
				profesionalisme, dan kesejahteraan para anggotanya serta untuk memajukan bidang teknik di
				Indonesia.
			</p>
		</div>
		<!-- Gambar dengan animasi bounce, hidden on mobile -->
		<div class="flex justify-between items-center mb-4 hidden md:flex"> <!-- Add hidden class for mobile -->
			<div class="flex flex-col items-center bounce">
				<img src="bnsp.png" alt="" class="h-48 w-auto mb-2" data-aos="zoom-in-up" />
				<img src="lpjk.jpg" alt="" class="h-48 w-auto" data-aos="zoom-in-up" />
			</div>
			<img src="P3SM.jpg" alt="" class="h-48 w-auto bounce" data-aos="zoom-in-left" />
		</div>
	</div>

	<!-- Bagian kanan, hidden on mobile -->
	<div class="w-1/2 flex justify-center items-center hidden md:flex" data-aos="zoom-in"> <!-- Add hidden class for mobile -->
		<img src="astekindo.png" alt="" class="h-96 w-auto bounce mt-4" />
	</div>
</div>

<!-- Grid SKK -->
<div class="w-[95%] max-w-6xl mx-auto mt-8" data-aos="zoom-in">
	<!-- Teks "Daftar SKK" di tengah -->
	<div class="text-center mb-6">
		<p class="text-2xl font-bold">Daftar SKK Pada Astekindo Maluku</p>
	</div>

	<!-- Grid untuk SKK -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		{#each skk as skk}
			<div
				class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
				data-aos="zoom-in"
			>
				<div class="overflow-hidden">
					<!-- Gambar SKK -->
					<img
						class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
						src="https://astekindomaluku.pockethost.io/api/files/{skk.collectionId}/{skk.id}/{skk.foto_skk}"
						alt={skk.nama_skk}
					/>
				</div>

				<div class="p-6">
					<!-- Judul -->
					<h3
						class="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300"
					>
						{skk.nama_skk}
					</h3>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="w-[95%] max-w-6xl mx-auto mt-8">
	<!-- Teks "Daftar SKK" di tengah -->
	<div class="text-center mb-6" data-aos="zoom-in">
		<p class="text-2xl font-bold">Jenis Sertifikat Badan Usaha Pada Astekindo Maluku</p>
	</div>

	<!-- Grid untuk SKK -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		{#each sbu as sbu}
			<div
				class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
				data-aos="zoom-in"
			>
				<div class="overflow-hidden">
					<!-- Gambar SKK -->
					<img
						class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
						src="https://astekindomaluku.pockethost.io/api/files/{sbu.collectionId}/{sbu.id}/{sbu.foto_sbu}"
						alt={sbu.nama_sbu}
					/>
				</div>

				<div class="p-6">
					<!-- Judul -->
					<h3
						class="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300"
					>
						{sbu.nama_sbu}
					</h3>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Grid Tim -->
<div class="w-[95%] max-w-6xl mx-auto mt-8" data-aos="zoom-in">
	<!-- Teks "Tim Astekindo Maluku" di tengah -->
	<div class="text-center mb-6">
		<p class="text-2xl font-bold">Tim Astekindo Maluku</p>
	</div>

	<!-- Grid untuk Tim -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		{#each tim as tim}
			<div
				class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
			>
				<!-- Gambar Anggota Tim, tidak full width -->
				<img
					class="w-40 h-40 object-cover transition-transform duration-500 hover:scale-110 rounded-full mx-auto mt-6"
					src="https://astekindomaluku.pockethost.io/api/files/{tim.collectionId}/{tim.id}/{tim.foto_anggota}"
					alt={tim.nama_anggota}
				/>

				<!-- Informasi Tim -->
				<div class="p-6 text-center">
					<!-- Nama Anggota -->
					<h3 class="text-xl font-bold uppercase text-gray-800 mb-2">{tim.nama_anggota}</h3>

					<!-- Jabatan -->
					<p class="text-sm text-gray-600">{tim.jabatan}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="w-[95%] max-w-6xl mx-auto mt-8" data-aos="zoom-in">
	<!-- Teks "Tim Astekindo Maluku" di tengah -->
	<div class="text-center mb-6">
		<p class="text-2xl font-bold">Info Berita</p>
	</div>

	<!-- Grid untuk Tim -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		{#each berita as item}
			<div
				class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
			>
				<!-- Gambar Anggota Tim, tidak full width -->
				<img
					class="w-40 h-40 object-cover transition-transform duration-500 hover:scale-110 rounded-full mx-auto mt-6"
					src="https://astekindomaluku.pockethost.io/api/files/{item.collectionId}/{item.id}/{item.foto_berita}"
					alt={item.nama_anggota}
				/>

				<!-- Informasi Tim -->
				<div class="p-6 text-center">
					<!-- Nama Anggota -->
					<h3 class="text-xl font-bold uppercase text-gray-800 mb-2">{item.nama_berita}</h3>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Google Maps -->
<div class="relative w-full h-0 pb-[35%] mt-6" data-aos="zoom-in">
	<!-- Mengubah padding-bottom dari 56.25% menjadi 35% -->
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11426.13575334434!2d128.1837023!3d-3.6957756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce966e24aafaf%3A0xf2548d53c5f1f4f8!2sAstekindo%20Maluku!5e0!3m2!1sid!2sid!4v1690221661858!5m2!1sid!2sid"
		class="absolute top-0 left-0 w-full h-full"
		loading="lazy"
	></iframe>
</div>

<style>

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	.bounce {
		animation: bounce 2s infinite;
	}
</style>
