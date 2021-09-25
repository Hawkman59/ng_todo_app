import { Injectable } from "@angular/core"
import { IUsecase } from "src/app/core/usecase"
import { Todo } from "../entities/todo"
import { TodoRepository } from "../repositories/todo.repository"

export class CreateTodoRequest{
    constructor(public readonly text: string){}
}

@Injectable({providedIn: 'root'})
export class AddTodoUsecase implements IUsecase<CreateTodoRequest, void> {
    presenter: void

    constructor(public readonly repository: TodoRepository){}

    async execute(request: CreateTodoRequest): Promise<void>{

      const text = request.text
      if (text == null || text.trim() === '') {
        return;
      }

      const todo = new Todo(text);
      await this.repository.createTodo(todo);

    }
}