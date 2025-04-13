import { sql } from 'drizzle-orm';
import { sqliteTable } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export type Habit = typeof habits.$inferSelect;
export type HabitLog = typeof habitLogs.$inferSelect;

export const user = sqliteTable('user', {
	id: t.integer('id').primaryKey(),
	age: t.integer('age')
});

export const habits = sqliteTable('habits', {
	id: t.int().primaryKey({ autoIncrement: true }),
	name: t.text().notNull(),
	createdAt: t.text('created_at').default(sql`(current_timestamp)`),
	updatedAt: t
		.text('updated_at')
		.default(sql`(current_timestamp)`)
		.$onUpdate(() => sql`(current_timestamp)`)
});

export const habitLogs = sqliteTable('habit_logs', {
	id: t.int().primaryKey({ autoIncrement: true }),
	habitId: t.int('habit_id').references(() => habits.id, { onDelete: 'cascade' }),
	date: t.text().notNull(),
	createdAt: t.text('created_at').default(sql`(current_timestamp)`),
	updatedAt: t
		.text('updated_at')
		.default(sql`(current_timestamp)`)
		.$onUpdate(() => sql`(current_timestamp)`)
});
