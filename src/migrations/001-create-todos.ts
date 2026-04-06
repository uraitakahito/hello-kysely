import type { Kysely } from 'kysely';
import { sql } from 'kysely';

async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('todos')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('title', 'varchar(255)', (col) => col.notNull())
    .addColumn('is_completed', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`now()`))
    .execute();
}

async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('todos').execute();
}

export { down, up };
