import type { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely';

interface TodoTable {
  id: Generated<number>;
  title: string;
  isCompleted: ColumnType<boolean, boolean | undefined, boolean>;
  createdAt: ColumnType<Date, string | undefined, never>;
}

interface Database {
  todos: TodoTable;
}

type Todo = Selectable<TodoTable>;
type NewTodo = Insertable<TodoTable>;
type TodoUpdate = Updateable<TodoTable>;

export type { Database, NewTodo, Todo, TodoUpdate };
