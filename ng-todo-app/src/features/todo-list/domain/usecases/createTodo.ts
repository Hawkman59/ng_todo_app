import { TodoRepository } from "../repositories/todoRepository"

export class CreateTodo{
    repository: TodoRepository

    constructor(repository: TodoRepository){
        this.repository = repository
    }

    execute(text: string){
        return this.repository.createTodo(text)
    }
}