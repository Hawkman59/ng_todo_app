import { Injectable } from "@angular/core";
import { Todo } from "../../domain/entities/todo";
import { TodoRepository } from "../../domain/repositories/todo.repository";
import { TodoLocalDatasource } from "../datasources/todo.local.datasource";

@Injectable({providedIn: 'root'})
export class TodoRepositoryImpl implements TodoRepository{

    constructor(public readonly localDatasource: TodoLocalDatasource){}

    async createTodo(todo: Todo): Promise<void>{
        await this.localDatasource.createTodo(todo)
        return 
    }

    /* updateTodoStatus(id: number, todo: Todo): Promise<Todo>{

    }

    deleteTodo(id: number): Promise<void>{

    } */

    async getTodoList(): Promise<Todo[]>{
        var todoList = await this.localDatasource.getTodos()
        return todoList
    }
}