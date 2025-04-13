<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
</script>

<nav class="dock border-base-300 bg-base-300 md:hidden">
	<button class:dock-active={page.url.pathname === '/'} onclick={() => goto('/')}>
		<svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"
				><polyline
					points="1 11 12 2 23 11"
					fill="none"
					stroke="currentColor"
					stroke-miterlimit="10"
					stroke-width="2"
				></polyline><path
					d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
					fill="none"
					stroke="currentColor"
					stroke-linecap="square"
					stroke-miterlimit="10"
					stroke-width="2"
				></path><line
					x1="12"
					y1="22"
					x2="12"
					y2="18"
					fill="none"
					stroke="currentColor"
					stroke-linecap="square"
					stroke-miterlimit="10"
					stroke-width="2"
				></line></g
			></svg
		>
		<span class="dock-label">Home</span>
	</button>

	<button
		class:dock-active={page.url.pathname === '/habits/new'}
		onclick={() => goto('/habits/new')}
	>
		<svg
			class="size-[1.2em]"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			><path
				fill="currentColor"
				d="M7.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5"
			/><path
				fill="currentColor"
				fill-rule="evenodd"
				d="M0 6.4c0-2.24 0-3.36.436-4.22A4.03 4.03 0 0 1 2.186.43c.856-.436 1.98-.436 4.22-.436h2.2c2.24 0 3.36 0 4.22.436c.753.383 1.36.995 1.75 1.75c.436.856.436 1.98.436 4.22v2.2c0 2.24 0 3.36-.436 4.22a4.03 4.03 0 0 1-1.75 1.75c-.856.436-1.98.436-4.22.436h-2.2c-2.24 0-3.36 0-4.22-.436a4.03 4.03 0 0 1-1.75-1.75C0 11.964 0 10.84 0 8.6zM6.4 1h2.2c1.14 0 1.93 0 2.55.051c.605.05.953.142 1.22.276a3.02 3.02 0 0 1 1.31 1.31c.134.263.226.611.276 1.22c.05.617.051 1.41.051 2.55v2.2c0 1.14 0 1.93-.051 2.55c-.05.605-.142.953-.276 1.22a3 3 0 0 1-1.31 1.31c-.263.134-.611.226-1.22.276c-.617.05-1.41.051-2.55.051H6.4c-1.14 0-1.93 0-2.55-.05c-.605-.05-.953-.143-1.22-.277a3 3 0 0 1-1.31-1.31c-.134-.263-.226-.61-.276-1.22c-.05-.617-.051-1.41-.051-2.55v-2.2c0-1.14 0-1.93.051-2.55c.05-.605.142-.953.276-1.22a3.02 3.02 0 0 1 1.31-1.31c.263-.134.611-.226 1.22-.276C4.467 1.001 5.26 1 6.4 1"
				clip-rule="evenodd"
			/>
		</svg>
		<span class="dock-label">New</span>
	</button>

	<button class:dock-active={page.url.pathname === '/stats'} onclick={() => goto('/stats')}>
		<svg class="size-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<g
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="butt"
				stroke-linejoin="miter"
			>
				<line x1="6" y1="12" x2="6" y2="18" />
				<line x1="12" y1="8" x2="12" y2="18" />
				<line x1="18" y1="4" x2="18" y2="18" />
			</g>
		</svg>

		<span class="dock-label">Stats</span>
	</button>
</nav>
