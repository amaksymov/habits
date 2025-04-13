import type { RequestEvent } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import * as db from '$lib/server/db';

export async function POST({ request }: RequestEvent) {
	const body = await request.json();

	if (typeof body.habitId !== 'number') {
		return json({ error: 'habitId must be a number' }, { status: 400 });
	}

	await db.toggleHabitLog(body.habitId, body.date);

	return json({}, { status: 201 });
}
