<script lang="ts">
	import HabitForm from '$lib/components/HabitForm.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<HabitForm habit={data.habit} title="Edit" buttonText="Save" />
