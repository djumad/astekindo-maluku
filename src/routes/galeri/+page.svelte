<script lang="ts">
	export let data;
	const skk = data.skk.items;
	const sbu = data.sbu.items;
	const tim = data.tim.items;
</script>

<h2 class="text-center text-3xl font-bold mb-8">Galeri</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
	{#each skk as skk}
		<div class="relative group" data-aos="zoom-in">
			<img
				class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg"
				src="https://astekindomaluku.pockethost.io/api/files/{skk.collectionId}/{skk.id}/{skk.foto_skk}"
				alt={skk.nama_skk}
			/>
			<p
				class="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg"
			>
				{skk.nama_skk}
			</p>
		</div>
	{/each}

	{#each sbu as sbu}
		<div class="relative group" data-aos="zoom-in">
			<img
				class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg shadow-lg"
				src="https://astekindomaluku.pockethost.io/api/files/{sbu.collectionId}/{sbu.id}/{sbu.foto_sbu}"
				alt={sbu.nama_sbu}
			/>
			<p
				class="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm p-2 rounded-b-lg"
			>
				{sbu.nama_sbu}
			</p>
		</div>
	{/each}
</div>

<style>
	/* Custom styles for the gallery */
	h2 {
		color: #333; /* Darker title for contrast */
	}

	.grid {
		margin: 0 auto; /* Center the grid */
	}

	img {
		transition: transform 0.5s; /* Smooth transition for hover effects */
	}

	img:hover {
		transform: scale(1.05); /* Scale effect on hover */
	}

	/* Caption styles */
	p {
		font-size: 14px; /* Caption font size */
	}
</style>
