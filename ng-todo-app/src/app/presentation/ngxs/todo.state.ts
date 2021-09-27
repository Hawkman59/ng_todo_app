import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Todo } from 'src/app/features/todo-list/domain/entities/todo';
import { AddTodoUsecase } from 'src/app/features/todo-list/domain/usecases/addTodo.usecase';
import { GetTodoListUsecase } from 'src/app/features/todo-list/domain/usecases/getTodoList.usecase';
import { Todos } from '.';

export interface TodoStateModel{
    todos: Todo[]
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
      todos: []
  }
})
@Injectable()
export class TodosState {
    constructor(private getTodoListUsecase: GetTodoListUsecase, private addTodoUsecase: AddTodoUsecase) {}

    @Action(Todos.FetchAll)
    async fetchAllTodos({ patchState }: StateContext<TodoStateModel>){
        const result = await this.getTodoListUsecase.execute()
        if(result != undefined){
            patchState({todos: result})
        }
    }

    @Action(Todos.Add)
    async AddTodos(ctx: StateContext<TodoStateModel>, action: Todos.Add){
        await this.addTodoUsecase.execute({text: action.text})
    }
}