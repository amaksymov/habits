import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');

		if (!name) {
			return fail(400, { name, missing: true });
		}

		await db.createHabit(name);

		redirect(303, '/');
	}
} satisfies Actions;
