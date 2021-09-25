import { anyString, instance, mock, reset, verify, when } from 'ts-mockito';
import { Todo } from '../entities/todo';
import { TodoRepository } from '../repositories/todo.repository';
import { GetTodoListUsecase } from './getTodoList.usecase';

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

describe('GetTodoListUsecase', () => {
    const mockedTodoRepository: TodoRepository = mock(MockTodoRepository)
    let usecase: GetTodoListUsecase
    let repository: TodoRepository 

    beforeEach(() => { 
        reset(mockedTodoRepository)
        repository = instance(mockedTodoRepository)
    })

    let tTodo = new Todo("test Todo")
    let tTodo2 = new Todo("test Todo")
    let todoList = [tTodo,tTodo2]

    it('should get the list of Todos', async () =>  {
        when(mockedTodoRepository.getTodoList()).thenResolve(todoList)
        
        usecase = new GetTodoListUsecase(repository)
       
        const fetchedList = await usecase.execute()

        expect(fetchedList).toContain(tTodo)
        expect(fetchedList).toContain(tTodo2)
        verify(mockedTodoRepository.getTodoList())
    });

});
