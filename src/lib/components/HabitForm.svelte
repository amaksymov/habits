<script lang="ts">
	import type { PageProps } from './$types';

	let { habit, title, buttonText }: PageProps = $props();
</script>

<div class="card card-border border-base-200 bg-base-200 card-sm cursor-pointer overflow-hidden">
	<div class="card-body">
		<form method="POST" class="flex w-full max-w-xs flex-col gap-4 p-4">
			<h2 class="card-title">{title}</h2>
			{#if habit}
				<input type="number" hidden name="id" value={habit.id} />
			{/if}

			<input
				type="text"
				class="input validator w-full"
				placeholder="Name"
				name="name"
				required
				minlength="1"
				value={habit?.name}
			/>

			<div class="card-actions justify-center">
				<button class="btn btn-soft btn-secondary self-start">{buttonText}</button>
			</div>
		</form>
	</div>
</div>
