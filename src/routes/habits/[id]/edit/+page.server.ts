import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const name = data.get('name');

		if (!name) {
			return fail(400, { name, missing: true });
		}

		if (!id) {
			return fail(400, { id, missing: true });
		}

		const habit = await db.getHabit(id);

		if (!habit) {
			return fail(400, { habit, notFound: true });
		}

		await db.updateHabit(habit.id, name);

		redirect(303, `/habits/${id}`);
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ params }) => {
	const habitId: number = params.id;
	return {
		habit: await db.getHabit(habitId)
	};
};
