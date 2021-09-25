import { Injectable } from "@angular/core";
import { Todo } from "../../domain/entities/todo";

@Injectable({providedIn: 'root'})
export class TodoLocalDatasource{
     async createTodo(todo: Todo):Promise<void>{
          localStorage.setItem(todo.id.toString(), JSON.stringify(todo))

          return
     }

     async getTodos():Promise<Todo[]>{
          var todos:Todo[]
          var keys = Object.keys(localStorage), i = keys.length

          while(i--){
               var todoJson = JSON.parse(localStorage.getItem(keys[i]))
               var todo = Todo.mapJson(todoJson)
               todos.push(todo)
          }
          
          return todos
     }
}