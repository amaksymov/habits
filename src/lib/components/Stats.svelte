<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import CalHeatmap from 'cal-heatmap';
	import Tooltip from 'cal-heatmap/plugins/Tooltip';
	import 'cal-heatmap/cal-heatmap.css';

	let { habitLogs } = $props();
	let years = $derived.by(() => {
		return Array.from(
			new Set(habitLogs.filter((item) => item?.date).map((item) => item.date.slice(0, 4)))
		).sort();
	});
	let streak = $derived(habitLogs.length);
	let totalActiveDays = $derived(habitLogs.length);
	let year = $state(years[0]);
	const now = dayjs();
	const cal = $state(new CalHeatmap());

  function changeYear(newYear: string) {
    year = newYear;
  }
	const monthsCount = Array.from({ length: now.month() + 1 }, (_, i) => ({
		month: dayjs().month(i).format('MMM'),
		count: 0
	}));

	habitLogs.forEach((log) => {
		const logDate = dayjs(log.date);
		if (logDate.year() === now.year() && logDate.month() <= now.month()) {
			monthsCount[logDate.month()].count += 1;
		}
	});

	onMount(() => {
		cal.paint(
			{
				data: {
					source: habitLogs,
					x: 'date',
					y: () => 1,
					groupY: 'max'
				},
				date: { start: new Date('2025-01-01') },
				range: 8,
				scale: {
					color: {
						type: 'quantize',
						scheme: 'threshold',
						range: ['#37a446'],
						domain: [0, 1]
					}
				},
				domain: {
					type: 'month'
				},
				subDomain: { type: 'day', radius: 2 },
				itemSelector: '#ex-wind'
			},
			[
				[
					Tooltip,
					{
						text: function (a, b, dayjsDate) {
							return dayjsDate.format('LL');
						}
					}
				]
			]
		);
	});
</script>

<div>
	<div class="flex items-baseline justify-end gap-4">
		<span><strong>Total active days</strong>: {totalActiveDays}</span>

		<span><strong>Max streak</strong>: {streak}</span>

		<div class="dropdown">
			<div tabindex="0" role="button" class="btn m-1">{year}</div>
			<ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
				{#each years as year}
					<li><a onclick={() => {changeYear(year)}}>{year}</a></li>
				{/each}
			</ul>
		</div>
	</div>

	<div id="ex-wind" class="overflow-x-auto w-full"></div>
</div>
