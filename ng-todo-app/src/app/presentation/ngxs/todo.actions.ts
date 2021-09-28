import { Todo } from "src/app/features/todo-list/domain/entities/todo";

export namespace Todos {
    export class Add {
        static readonly type = '[Todo] Add';
        constructor(public text: string ) {
        }
    }

    export class UpdateStatus {
        static readonly type = '[Todo] Update Status';
        constructor(public id: number) {
        }
    }

    export class Delete {
        static readonly type = '[Todo] Delete';
        constructor(public id: number) {
        }
    }
    
    export class FetchAll {
        static readonly type = '[Todo] Fetch All';
        public todos: Todo[]
        constructor() {
        }
    }
}
