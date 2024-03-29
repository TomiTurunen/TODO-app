import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo';

@Component(
  {
    selector: 'app-todo-notepad',
    templateUrl: './todo-notepad.component.html',
    styleUrls: ['./todo-notepad.component.css']
  }
)
export class TodoNotepadComponent {

  @Input()
  todos: Todo[];

  @Input()
  callbackFunction: () => void;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}

