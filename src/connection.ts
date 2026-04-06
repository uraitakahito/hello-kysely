import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';
import type { Database } from './database.js';

const dialect = new PostgresDialect({
  pool: new pg.Pool({
    host: process.env['DATABASE_HOST'] ?? 'localhost',
    port: Number(process.env['DATABASE_PORT'] ?? 5432),
    user: process.env['DATABASE_USER'] ?? 'tutorial',
    password: process.env['DATABASE_PASSWORD'] ?? 'tutorial',
    database: process.env['DATABASE_NAME'] ?? 'hello_kysely',
    max: 10,
  }),
});

const db = new Kysely<Database>({
  dialect,
  plugins: [new CamelCasePlugin()],
});

export { db };
