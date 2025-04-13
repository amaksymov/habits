<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
</script>

<div class="navbar bg-base-300 shadow-sm">
	<div class="navbar-start">
		{#if page.url.pathname !== '/'}
			<button
				class="btn btn-ghost btn-circle"
				aria-label="notifications"
				onclick={() => {
					goto('/');
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"
						stroke-width="0.7"
						stroke="currentColor"
					/>
				</svg>
			</button>
		{/if}
	</div>
	<div class="navbar-center">
		<a class="text-xl" href="/">Habits</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle" aria-label="new" onclick={() => goto('/habits/new')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
				<path
					fill="currentColor"
					d="M7.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5"
					stroke-width="0.7"
					stroke="currentColor"
				/>
				<path
					fill="currentColor"
					fill-rule="evenodd"
					d="M0 6.4c0-2.24 0-3.36.436-4.22A4.03 4.03 0 0 1 2.186.43c.856-.436 1.98-.436 4.22-.436h2.2c2.24 0 3.36 0 4.22.436c.753.383 1.36.995 1.75 1.75c.436.856.436 1.98.436 4.22v2.2c0 2.24 0 3.36-.436 4.22a4.03 4.03 0 0 1-1.75 1.75c-.856.436-1.98.436-4.22.436h-2.2c-2.24 0-3.36 0-4.22-.436a4.03 4.03 0 0 1-1.75-1.75C0 11.964 0 10.84 0 8.6zM6.4 1h2.2c1.14 0 1.93 0 2.55.051c.605.05.953.142 1.22.276a3.02 3.02 0 0 1 1.31 1.31c.134.263.226.611.276 1.22c.05.617.051 1.41.051 2.55v2.2c0 1.14 0 1.93-.051 2.55c-.05.605-.142.953-.276 1.22a3 3 0 0 1-1.31 1.31c-.263.134-.611.226-1.22.276c-.617.05-1.41.051-2.55.051H6.4c-1.14 0-1.93 0-2.55-.05c-.605-.05-.953-.143-1.22-.277a3 3 0 0 1-1.31-1.31c-.134-.263-.226-.61-.276-1.22c-.05-.617-.051-1.41-.051-2.55v-2.2c0-1.14 0-1.93.051-2.55c.05-.605.142-.953.276-1.22a3.02 3.02 0 0 1 1.31-1.31c.263-.134.611-.226 1.22-.276C4.467 1.001 5.26 1 6.4 1"
					clip-rule="evenodd"
					stroke-width="0.7"
					stroke="currentColor"
				/>
			</svg>
		</button>

		<button
			class="btn btn-ghost btn-circle"
			aria-label="notifications"
			onclick={() => goto('/stats')}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<g fill="none" stroke="currentColor" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M16 16V8m-4 8v-5m-4 5v-3" />
					<path
						d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
					/>
				</g>
			</svg>
		</button>
	</div>
</div>
