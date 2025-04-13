<script lang="ts">
	import { goto } from '$app/navigation';
	import Stats from '$lib/components/Stats.svelte';

	let { data } = $props();

	let { habits } = data ?? {};
</script>

<div
	class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
>
	<div
		class="card card-border card-sm overflow-hidden shadow-sm"
		role="button"
	>
		<div class="card-body">
			<ul>
				{#each habits as habit}
					<li>{habit.name}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
