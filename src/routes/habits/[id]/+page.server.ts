import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import type { PageServerLoad, Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id) {
			return fail(400, { id, missing: true });
		}

		await db.deleteHabit(id);

		redirect(303, '/');
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ params }) => {
	const habitId: number = params.id;
	return {
		habit: await db.getHabitWithLogs(habitId)
	};
};
