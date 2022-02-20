<script>
	export let photo;
	let isModalOpen = false;
	let isPhotoModalOpen = false;

	function modalHandler() {
		console.log('modal clicked');
		isModalOpen = true;
	}

	function closeHandler() {
		isModalOpen = false;
		console.log('close clicked');
	}

	$: isPhotoModalOpen = isModalOpen;
</script>

{#if photo}
	<div
		class="photo-card relative overflow-hidden  cursor-pointer  hover:opacity-50 hover:cursor-pointer"
		on:click={modalHandler}
	>
		<div
			style:width="250px"
			style:height="250px"
			style:background-image={`url(${photo})`}
			class="bg-cover bg-center w-full h-full"
		/>
	</div>
{/if}

{#if isPhotoModalOpen}
	<div
		class="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen modal-container"
		role="button"
	>
		<div class="absolute w-screen h-screen bg-primary-800 opacity-60" />

		<div
			class="z-50 w-9/12 mx-auto my-auto bg-transparent rounded shadow-none modal-container md:w-10/12"
			on:click={modalHandler}
			role="button"
		>
			<div
				class="flex items-center justify-center w-full p-2 bg-transparent"
style:height='70%'
			>
				<div
					class="absolute top-0 right-0 z-50 flex items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
				>
					<button
						class="w-10 h-10 mr-5 text-white hover:text-gray-400 focus:outline-none"
						on:click={closeHandler}
						role="button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<div class="w-4/5 flex items-center justify-center">
					<img src={photo} alt="product detail" />
				</div>
			</div>
		</div>
	</div>
{/if}
