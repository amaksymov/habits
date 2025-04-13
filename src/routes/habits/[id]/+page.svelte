<script lang="ts">
	import { goto } from '$app/navigation';
	import Stats from '$lib/components/Stats.svelte';

	let { data } = $props();

	let { habitLogs } = data?.habit ?? {};

	let deleteModal: HTMLDialogElement;

	function openDeleteModal() {
		deleteModal.showModal();
	}
</script>

<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#if data.habit}
		<div class="card bg-base-100 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">{data.habit.name}</h2>
				<ul>
					{#each Object.entries(data.habit) as [key, value] (key)}
						{#if Array.isArray(value)}
							<li><strong>{key}</strong>: {value.length}</li>
						{:else}
							<li><strong>{key}</strong>: {value}</li>
						{/if}
					{/each}
				</ul>

				<div class="card-actions justify-end">
					<button
						class="btn btn-soft btn-warning"
						onclick={() => goto(`/habits/${data.habit.id}/edit`)}>Edit</button
					>
					<dialog id="deleteModal" class="modal" bind:this={deleteModal}>
						<div class="modal-box">
							<h3 class="text-lg font-bold">Delete</h3>
							<p class="py-4">Are you sure you want to delete this habit?</p>
							<div class="modal-action">
								<form method="POST">
									<input name="id" type="hidden" value={data.habit.id} />
									<button class="btn btn-soft btn-error">Yes</button>
								</form>

								<form method="dialog">
									<button class="btn btn-soft btn-primary">No</button>
								</form>
							</div>
						</div>
					</dialog>
					<button class="btn btn-soft btn-error" onclick={openDeleteModal}>Delete</button>
				</div>
			</div>
		</div>
	{/if}

	<div class="card bg-base-100 shadow-sm">
		<div class="card-body">
			<div class="flex">
				<p class="card-title">Statistic</p>

				<label class="swap">
					<input type="checkbox" />
					<div class="swap-on">by: Month</div>
					<div class="swap-off">by: Year</div>
				</label>
			</div>
			<p>
				A card component has a figure, a body part, and inside body there are title and actions
				parts
			</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>

	<div class="card bg-base-100 shadow-sm sm:col-span-2">
		<div class="card-body">
			<Stats {habitLogs} />
		</div>
	</div>
</div>
