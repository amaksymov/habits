import { fail, redirect } from '@sveltejs/kit';
import * as db from '$lib/server/db';
import type { PageServerLoad, Actions } from './$types';


export const load: PageServerLoad = async () => {
	return {
		habits: await db.getHabitsWithLogsSince()
	};
};
