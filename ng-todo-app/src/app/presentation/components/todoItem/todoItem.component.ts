import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/features/todo-list/domain/entities/todo';

@Component({
  selector: 'todo-item',
  templateUrl: 'todoItem.component.html',
  styleUrls: ['todoItem.component.scss'],
})
export class TodoItem {
    @Input() todo: Todo
    @Output() update = new EventEmitter<number>();
    @Output() delete = new EventEmitter<number>();

    callParentUpdate() {
      this.update.emit(this.todo.id);
    }
    callParentDelete() {
      this.delete.emit(this.todo.id);
    }
}
