import { db } from './connection.js';
import type { NewTodo } from './database.js';

async function createTodo(todo: NewTodo) {
  return db.insertInto('todos').values(todo).returningAll().executeTakeFirstOrThrow();
}

console.log('--- CREATE: Adding todos ---');

const todo1 = await createTodo({ title: 'Learn Kysely basics' });
console.log('Created:', todo1);

const todo2 = await createTodo({ title: 'Build a CRUD app' });
console.log('Created:', todo2);

const todo3 = await createTodo({ title: 'Deploy to production' });
console.log('Created:', todo3);

await db.destroy();
