import { Injectable } from "@angular/core";
import { Todo } from "../../domain/entities/todo";
import { TodoRepository } from "../../domain/repositories/todo.repository";
import { TodoLocalDatasource } from "../datasources/todo.local.datasource";

@Injectable({providedIn: 'root'})
export class TodoRepositoryImpl implements TodoRepository{

    constructor(public readonly localDatasource: TodoLocalDatasource){}

    async createTodo(todo: Todo): Promise<void>{
        await this.localDatasource.createTodo(todo)
    }

    async updateTodoStatus(id: number): Promise<void>{
        await this.localDatasource.updateTodoStatus(id)
    }

    async deleteTodo(id: number): Promise<void>{
        await this.localDatasource.deleteTodo(id)
    }

    async getTodoList(): Promise<Todo[]>{
        var todoList = await this.localDatasource.getTodosUndone()
        return todoList
    }

    async getDoneList(): Promise<Todo[]>{
        var todoList = await this.localDatasource.getTodosDone()
        return todoList
    }

    async getNextId(): Promise<number>{
        var nextId = await this.localDatasource.getNextId()

        return nextId
    }
}