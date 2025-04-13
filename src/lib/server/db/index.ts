import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { eq, and, between } from 'drizzle-orm';
import dayjs from 'dayjs';
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
const client = new Database(env.DATABASE_URL);

export const db = drizzle(client, { schema });

export async function getHabit(id: number) {
	const result = await db.select().from(schema.habits).where(eq(schema.habits.id, id)).limit(1);
	return result[0] ?? null;
}

export async function getHabitWithLogs(id: number) {
	const rows = await db
		.select({
			habit: schema.habits,
			habitLog: schema.habitLogs
		})
		.from(schema.habits)
		.leftJoin(schema.habitLogs, eq(schema.habits.id, schema.habitLogs.habitId))
		.where(eq(schema.habits.id, id));

	if (rows.length === 0) {
		return null;
	}

	return {
		...rows[0].habit,
		habitLogs: rows.filter((row) => row.habitLog !== null).map((row) => row.habitLog!)
	};
}

export async function getHabits() {
	const result = await db.select().from(schema.habits);
	return result;
}

export async function getHabitsWithLogsSince(daysAgo: number = 7) {
	const today = dayjs().format('YYYY-MM-DD');
	const weekAgo = dayjs().subtract(daysAgo, 'day').format('YYYY-MM-DD');
	const rows = await db
		.select({
			habit: schema.habits,
			habitLog: schema.habitLogs
		})
		.from(schema.habits)
		.leftJoin(
			schema.habitLogs,
			and(
				eq(schema.habits.id, schema.habitLogs.habitId),
				between(schema.habitLogs.date, weekAgo, today)
			)
		);

	const result = rows.reduce<Record<number, schema.Habit & { habitLogs: schema.HabitLog[] }>>(
		(acc, { habit, habitLog }) => {
			if (!acc[habit.id]) {
				acc[habit.id] = { ...habit, habitLogs: [] };
			}
			if (habitLog) {
				acc[habit.id].habitLogs.push(habitLog);
			}
			return acc;
		},
		{}
	);
	return Object.values(result);
}

export async function createHabit(name: string) {
	const result = await db.insert(schema.habits).values({ name }).returning();
	return result ?? null;
}

export async function deleteHabit(id: number) {
	await db.delete(schema.habits).where(eq(schema.habits.id, id));
}

export async function updateHabit(id: number, name: string) {
	await db.update(schema.habits).set({ name: name }).where(eq(schema.habits.id, id));
}

export async function createHabitLog(habitId: number, date: string) {
	await db.insert(schema.habitLogs).values({ habitId, date });
}

export async function deleteHabitLog(id: number) {
	await db.delete(schema.habitLogs).where(eq(schema.habitLogs.id, id));
}

export async function toggleHabitLog(habitId: number, date: string) {
	const [habitLog] = await db
		.select()
		.from(schema.habitLogs)
		.where(and(eq(schema.habitLogs.habitId, habitId), eq(schema.habitLogs.date, date)))
		.limit(1);

	if (habitLog) {
		await db.delete(schema.habitLogs).where(eq(schema.habitLogs.id, habitLog.id));
		return habitLog;
	} else {
		return await db.insert(schema.habitLogs).values({ habitId, date }).returning();
	}
}
