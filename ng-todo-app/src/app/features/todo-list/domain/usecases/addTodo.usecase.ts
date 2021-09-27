import { Injectable } from "@angular/core"
import { IUsecase } from "src/app/core/usecase"
import { TodoRepositoryImpl } from "../../data/repositories/todo.repository.impl"
import { Todo } from "../entities/todo"

export class CreateTodoRequest{
    constructor(public readonly text: string){}
}

@Injectable({providedIn: 'root'})
export class AddTodoUsecase implements IUsecase<CreateTodoRequest, void> {
    presenter: void

    constructor(public readonly repository: TodoRepositoryImpl){}

    async execute(request: CreateTodoRequest): Promise<void>{

      const text = request.text
      if (text == null || text.trim() === '') {
        return;
      }

      const todoId = await this.repository.getNextId()

      const todo = new Todo(text,todoId);
      await this.repository.createTodo(todo);

    }
}