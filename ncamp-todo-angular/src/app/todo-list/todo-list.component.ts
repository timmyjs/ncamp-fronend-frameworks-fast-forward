import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  @Input() todos: string[];
  
  @Output() onStoreTodo = new EventEmitter;
  @Output() onAddTodo = new EventEmitter;
  @Output() onRemoveTodo = new EventEmitter;

  onInput({target}) {
    this.onStoreTodo.emit(target.value);
  }

  onClick() {
    this.onAddTodo.emit();
  }

  onClickTodo(todo: string) {
    this.onRemoveTodo.emit(todo);
  }
}
