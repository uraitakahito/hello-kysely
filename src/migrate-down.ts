import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promises as fs } from 'node:fs';
import { FileMigrationProvider, Migrator } from 'kysely';
import { db } from './connection.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(currentDir, 'migrations'),
  }),
});

const { error, results } = await migrator.migrateDown();

for (const result of results ?? []) {
  if (result.status === 'Success') {
    console.log(`Migration "${result.migrationName}" was reverted successfully`);
  } else if (result.status === 'Error') {
    console.error(`Failed to revert migration "${result.migrationName}"`);
  }
}

if (error) {
  console.error('Failed to migrate down');
  console.error(error);
  process.exitCode = 1;
}

await db.destroy();
