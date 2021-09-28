import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { Todo } from 'src/app/features/todo-list/domain/entities/todo';
import { Todos, TodoStateModel } from '../../ngxs';

@Component({
  selector: 'app-home',
  templateUrl: 'todo.page.html',
  styleUrls: ['todo.page.scss'],
})
export class TodoPage {
  @Select(state => state.todos) todos$: Observable<TodoStateModel>;

  text: string = ""
  todos: Todo[] = []
  showDone: boolean = false

  constructor(private store: Store) {
    this.getTodoList()
  }

  addTodo(text: string){
    this.store.dispatch(new Todos.Add(text)).pipe().subscribe(()=>{
      this.getTodoList()
      this.text = ""
    })
    
    
  }

  getTodoList(){
    this.store.dispatch(new Todos.FetchAll()).pipe(withLatestFrom(this.todos$)).subscribe(([_,todos]) => {
      this.todos = todos.todos
    })
  }

  toggleDone(){
    this.showDone = !this.showDone
  }
}
