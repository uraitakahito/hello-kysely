import { db } from './connection.js';

console.log('--- UPDATE: Completing a todo ---');

const updated = await db
  .updateTable('todos')
  .set({ isCompleted: true })
  .where('title', '=', 'Learn Kysely basics')
  .returningAll()
  .executeTakeFirst();
console.log('Updated:', updated);

console.log('\nAll todos after update:');
const allTodos = await db.selectFrom('todos').selectAll().execute();
console.log(allTodos);

await db.destroy();
