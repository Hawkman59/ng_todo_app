import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Todo } from 'src/app/features/todo-list/domain/entities/todo';
import { AddTodoUsecase } from 'src/app/features/todo-list/domain/usecases/addTodo.usecase';
import { GetTodoListUsecase } from 'src/app/features/todo-list/domain/usecases/getTodoList.usecase';
import { UpdateTodoStatusUsecase } from 'src/app/features/todo-list/domain/usecases/updateTodoStatus.usecase';
import { Todos } from '.';

export interface TodoStateModel{
    todos: Todo[],
    done: Todo[]
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
      todos: [],
      done: []
  }
})
@Injectable()
export class TodosState {
    constructor(private getTodoListUsecase: GetTodoListUsecase, 
        private addTodoUsecase: AddTodoUsecase, 
        private updateTodoStatusUsecase: UpdateTodoStatusUsecase) {}

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

    @Action(Todos.UpdateStatus)
    async UpdateStatus(ctx: StateContext<TodoStateModel>, action: Todos.UpdateStatus){
        await this.updateTodoStatusUsecase.execute({id: action.id})
    }
}