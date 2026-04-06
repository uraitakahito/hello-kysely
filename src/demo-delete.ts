import { db } from './connection.js';

console.log('--- DELETE: Removing a todo ---');

const deleted = await db
  .deleteFrom('todos')
  .where('title', '=', 'Deploy to production')
  .returningAll()
  .executeTakeFirst();
console.log('Deleted:', deleted);

console.log('\nAll todos after delete:');
const allTodos = await db.selectFrom('todos').selectAll().execute();
console.log(allTodos);

await db.destroy();
