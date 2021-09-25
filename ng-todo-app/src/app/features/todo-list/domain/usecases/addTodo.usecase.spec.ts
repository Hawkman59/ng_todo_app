import { anyString, instance, mock, reset, verify, when } from 'ts-mockito';
import { Todo } from '../entities/todo';
import { TodoRepository } from '../repositories/todo.repository';
import { AddTodoUsecase } from './addTodo.usecase';

class MockTodoRepository implements TodoRepository{
    async createTodo(todo: Todo){
        return
    }

    /* updateTodoStatus(){

    }

    deleteTodo(id: number){

    } */

    async getTodoList(){
        return []
    }
}

describe('AddTodo', () => {
    const mockedTodoRepository: TodoRepository = mock(MockTodoRepository)
    let usecase: AddTodoUsecase
    let repository: TodoRepository 

    beforeEach(() => { 
        reset(mockedTodoRepository)
        repository = instance(mockedTodoRepository)
    })

    let tText = "test Todo"
    let tTodo = new Todo("test Todo")

    it('should create a new todo', () => {
        when(mockedTodoRepository.createTodo(anyString())).thenReturn()

        
        usecase = new AddTodoUsecase(repository)
       
        usecase.execute({text: tText})

        verify(mockedTodoRepository.createTodo(tTodo))
    });

});
