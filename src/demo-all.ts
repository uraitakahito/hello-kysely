import { db } from './connection.js';
import type { NewTodo } from './database.js';

// Clean slate
await db.deleteFrom('todos').execute();

// CREATE
console.log('=== CREATE ===');
const todos: NewTodo[] = [
  { title: 'Learn Kysely basics' },
  { title: 'Build a CRUD app' },
  { title: 'Deploy to production' },
];
for (const todo of todos) {
  const created = await db.insertInto('todos').values(todo).returningAll().executeTakeFirstOrThrow();
  console.log(`Created: [${String(created.id)}] ${created.title}`);
}

// READ
console.log('\n=== READ ===');
const allTodos = await db.selectFrom('todos').selectAll().execute();
for (const todo of allTodos) {
  console.log(`[${String(todo.id)}] ${todo.title} (completed: ${String(todo.isCompleted)})`);
}

// UPDATE
console.log('\n=== UPDATE ===');
await db.updateTable('todos').set({ isCompleted: true }).where('title', '=', 'Learn Kysely basics').execute();
const updatedTodos = await db.selectFrom('todos').selectAll().execute();
for (const todo of updatedTodos) {
  console.log(`[${String(todo.id)}] ${todo.title} (completed: ${String(todo.isCompleted)})`);
}

// DELETE
console.log('\n=== DELETE ===');
await db.deleteFrom('todos').where('title', '=', 'Deploy to production').execute();
const remainingTodos = await db.selectFrom('todos').selectAll().execute();
for (const todo of remainingTodos) {
  console.log(`[${String(todo.id)}] ${todo.title} (completed: ${String(todo.isCompleted)})`);
}

await db.destroy();
