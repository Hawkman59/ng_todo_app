import { Injectable } from "@angular/core"
import { IUsecase } from "src/app/core/usecase"
import { Todo } from "../entities/todo"
import { TodoRepository } from "../repositories/todo.repository"



@Injectable({providedIn: 'root'})
export class GetTodoListUsecase implements IUsecase<void, Todo[]> {
    presenter: void

    constructor(public readonly repository: TodoRepository){}

    async execute(request: void): Promise<Todo[]>{

      const todos = await this.repository.getTodoList()

      return todos

    }
}