import { anyString, instance, mock, reset, verify, when } from 'ts-mockito';
import { Todo } from '../entities/todo';
import { TodoRepository } from '../repositories/todoRepository';
import { CreateTodo } from './createTodo';

class MockTodoRepository implements TodoRepository{
    createTodo(text: string){
        return new Todo("")
    }

    deleteTodo(id: number){

    }

    getTodoList(){
        return []
    }
}

describe('CreateTodo', () => {
    const mockedTodoRepository: TodoRepository = mock(MockTodoRepository)
    let usecase: CreateTodo
    let repository: TodoRepository 

    beforeEach(() => { 
        reset(mockedTodoRepository)
        repository = instance(mockedTodoRepository)
        usecase = new CreateTodo(repository)
    })

    let tText = "test Todo"
    let tTodo = new Todo("test Todo")

    it('should create a new todo', () => {
        when(mockedTodoRepository.createTodo(anyString())).thenReturn(tTodo)

        
        usecase = new CreateTodo(repository)
        
        const result = usecase.execute(tText)

        expect(result).toBe(tTodo);
        verify(mockedTodoRepository.createTodo(tText))
    });

});
