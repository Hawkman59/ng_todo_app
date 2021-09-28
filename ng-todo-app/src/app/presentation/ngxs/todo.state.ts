import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Todo } from 'src/app/features/todo-list/domain/entities/todo';
import { AddTodoUsecase } from 'src/app/features/todo-list/domain/usecases/addTodo.usecase';
import { DeleteTodoUsecase } from 'src/app/features/todo-list/domain/usecases/deleteTodo.usecase';
import { GetDoneListUsecase } from 'src/app/features/todo-list/domain/usecases/getDoneList.usecase';
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
        private updateTodoStatusUsecase: UpdateTodoStatusUsecase,
        private deleteTodoUsecase: DeleteTodoUsecase,
        private getDoneListUsecase: GetDoneListUsecase) {}

    @Action(Todos.FetchAllUndone)
    async fetchAllUndoneTodos({ patchState }: StateContext<TodoStateModel>){
        const result = await this.getTodoListUsecase.execute()
        if(result != undefined){
            patchState({todos: result})
        }
    }

    @Action(Todos.FetchAllDone)
    async fetchAllDoneTodos({ patchState }: StateContext<TodoStateModel>){
        const result = await this.getDoneListUsecase.execute()
        if(result != undefined){
            patchState({done: result})
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

    @Action(Todos.Delete)
    async DeleteTodo(ctx: StateContext<TodoStateModel>, action: Todos.Delete){
        await this.deleteTodoUsecase.execute({id: action.id})
    }
}