import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: string;

  @Output() onClickItem = new EventEmitter;

  onClick() {
    this.onClickItem.emit(this.todo);
  }

}
