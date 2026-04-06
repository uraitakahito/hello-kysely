import { db } from './connection.js';

console.log('--- READ: Fetching todos ---');

console.log('\nAll todos:');
const allTodos = await db.selectFrom('todos').selectAll().execute();
console.log(allTodos);

console.log('\nFirst todo:');
const firstTodo = await db.selectFrom('todos').selectAll().executeTakeFirst();
console.log(firstTodo);

console.log('\nIncomplete todos:');
const incompleteTodos = await db
  .selectFrom('todos')
  .selectAll()
  .where('isCompleted', '=', false)
  .execute();
console.log(incompleteTodos);

await db.destroy();
