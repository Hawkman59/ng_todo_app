import { Todo } from "src/app/features/todo-list/domain/entities/todo";

export namespace Todos {
    export class Add {
        static readonly type = '[Todo] Add';
        constructor(public text: string ) {
        }
    }
    
    export class FetchAll {
        static readonly type = '[Todo] Fetch All';
        public todos: Todo[]
        constructor() {
        }
    }
}
