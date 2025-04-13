<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	let { children } = $props();
</script>

<Navigation />
<div class="pb-16">
	{@render children()}
</div>
