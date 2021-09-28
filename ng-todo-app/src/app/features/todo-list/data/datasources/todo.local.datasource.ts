import { Injectable } from "@angular/core";
import { Todo } from "../../domain/entities/todo";

@Injectable({providedIn: 'root'})
export class TodoLocalDatasource{
     async createTodo(todo: Todo):Promise<void>{

          localStorage.setItem(todo.id.toString(), JSON.stringify(todo))

     }

     async getNextId(){
          var keys = Object.keys(localStorage), i = keys.length
          var highestKey = 0
          
          keys.forEach((key) => {
               var keyInt = parseInt(key)
               if(keyInt > highestKey){
                    highestKey=keyInt
               }
          })

          return (highestKey+1)
     }

     async getTodosDone():Promise<Todo[]>{
          var todos:Todo[] = []
          var keys = Object.keys(localStorage), i = keys.length
          while(i--){
               var todoJson = JSON.parse(localStorage.getItem(keys[i]))
               var todo = Todo.mapJson(todoJson)
               if(todo.status){
                    todos.push(todo)
               }
               
          }
          
          return todos
     }

     async getTodosUndone():Promise<Todo[]>{
          var todos:Todo[] = []
          var keys = Object.keys(localStorage), i = keys.length
          while(i--){
               var todoJson = JSON.parse(localStorage.getItem(keys[i]))
               var todo = Todo.mapJson(todoJson)
               if(!todo.status){
                    todos.push(todo)
               }
          }
          
          return todos
     }

     async updateTodoStatus(id: number): Promise<void>{
          var todoJson = JSON.parse(localStorage.getItem(id.toString()))
          var todo = Todo.mapJson(todoJson)

          todo.status = !todo.status

          localStorage.setItem(todo.id.toString(), JSON.stringify(todo))
     }

     async deleteTodo(id: number): Promise<void>{
          localStorage.removeItem(id.toString())
     }
}