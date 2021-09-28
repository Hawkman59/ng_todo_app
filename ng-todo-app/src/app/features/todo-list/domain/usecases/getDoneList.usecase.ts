import { Injectable } from "@angular/core"
import { IUsecase } from "src/app/core/usecase"
import { TodoRepositoryImpl } from "../../data/repositories/todo.repository.impl"
import { Todo } from "../entities/todo"



@Injectable({providedIn: 'root'})
export class GetDoneListUsecase implements IUsecase<void, Todo[]> {
    presenter: void

    constructor(public readonly repository: TodoRepositoryImpl){}

    async execute(request: void): Promise<Todo[]>{

      const todos = await this.repository.getDoneList()

      return todos

    }
}