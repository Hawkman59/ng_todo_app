import { Todo } from "../entities/todo";

export abstract class TodoRepository {
    abstract  createTodo(text: string): Todo
    abstract deleteTodo(id: number): void
    abstract getTodoList(): Array<Todo>
}