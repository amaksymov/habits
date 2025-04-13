<script lang="ts">
	import { goto } from '$app/navigation';
	import dayjs from 'dayjs';

	let { habit } = $props();

	let weekDays = $derived.by(() => {
		const logDates = new Set(habit.habitLogs?.map((log) => log.date));

		const today = dayjs();

		const last7Days = Array.from({ length: 7 }).map((_, i) => {
			const date = today.subtract(6 - i, 'day');
			const isoDate = date.format('YYYY-MM-DD');

			return {
				date: date,
				completed: logDates.has(isoDate)
			};
		});
		return last7Days;
	});

	async function toggleHabitDay(index: number) {
		const habitId = habit.id;
		const date = weekDays[index].date.format('YYYY-MM-DD');

		if (index === -1) {
			return;
		}
		weekDays = weekDays.map((item, i) =>
			i === index ? { ...item, completed: !item.completed } : item
		);

		const response = await fetch('/api/toggle-habit-log', {
			method: 'POST',
			body: JSON.stringify({ habitId, date }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			weekDays = weekDays.map((item, i) =>
				i === index ? { ...item, completed: !item.completed } : item
			);
		}
	}
</script>

<div
	class="card card-border border-base-200 bg-base-200 card-sm cursor-pointer overflow-hidden shadow-sm"
	role="button"
	tabindex="0"
	onclick={() => goto(`/habits/${habit.id}`)}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			goto(`/habits/${habit.id}`);
		}
	}}
>
	<div class="card-body">
		<h2 class="text-lg font-semibold">{habit.name}</h2>
		<div class="grid grid-cols-7 gap-2">
			{#each weekDays as day, i (i)}
				<div class="flex flex-col items-center">
					<span class="pb-2 text-[10px] font-semibold opacity-50">{day.date.format('ddd')}</span>
					<button
						class="expandable btn border-base-300 aspect-square h-10 rounded-full border-2 px-2 py-1"
						onclick={(event) => {
							event.stopPropagation();
							toggleHabitDay(i);
						}}
						class:btn-primary={day.completed}
					>
						<span class="text-sm font-semibold">{day.date.format('DD')}</span>
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.expandable {
		position: relative;
		z-index: 1;
	}

	.expandable::before {
		content: '';
		position: absolute;
		top: -5px;
		bottom: -5px;
		left: -5px;
		right: -5px;
		z-index: -1;
	}
</style>
