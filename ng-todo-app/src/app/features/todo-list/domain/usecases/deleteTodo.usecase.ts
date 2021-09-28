import { Injectable } from "@angular/core"
import { IUsecase } from "src/app/core/usecase"
import { TodoRepositoryImpl } from "../../data/repositories/todo.repository.impl"
import { Todo } from "../entities/todo"

export class DeleteTodoRequest{
    constructor(public readonly id: number){}
}

@Injectable({providedIn: 'root'})
export class DeleteTodoUsecase implements IUsecase<DeleteTodoRequest, void> {
    presenter: void

    constructor(public readonly repository: TodoRepositoryImpl){}

    async execute(request: DeleteTodoRequest): Promise<void>{

      const id = request.id
      await this.repository.deleteTodo(id);

    }
}