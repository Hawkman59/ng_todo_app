import { Injectable } from "@angular/core";
import { Todo } from "../entities/todo";
@Injectable({providedIn: 'root'})
export abstract class TodoRepository {
    abstract createTodo(todo: Todo): Promise<void>
    /* abstract updateTodoStatus(id: number, todo: Todo): Promise<Todo>
    abstract deleteTodo(id: number): Promise<void> */
    abstract getTodoList(): Promise<Todo[]>
    abstract getNextId(): Promise<number>
}