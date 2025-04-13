<script lang="ts">
	import type { PageProps } from './$types';
	import HabitWidget from './HabitWidget.svelte';

	let { data }: PageProps = $props();
	// console.log(data?.habits);
</script>

<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
	{#each data?.habits as habit (habit.id)}
		<HabitWidget {habit} />
	{/each}

	<a
		href="/habits/new"
		class="flex w-full max-w-full min-w-[240px] items-center justify-center rounded-xl p-4 text-lg font-medium text-gray-500 shadow-sm transition hover:text-black"
	>
		+ Add a new habit
	</a>
</div>
