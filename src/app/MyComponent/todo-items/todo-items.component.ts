import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent {
  @Input()
  todo!: Todo;
  @Input() i!:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo: any) {
    this.todoCheckbox.emit(todo);
  }
}
