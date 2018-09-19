import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  username: string = 'Thomas';

  usernameEntered: boolean = false;

  todo: string = '';
  
  todos: string[] = ['Do good things', 'Talk about it'];

  changeUsername(name: string): void {
    this.username = name;
  }

  saveUsername(): void {
    this.usernameEntered = true;
  }

  storeTodo(todo: string): void {
    this.todo = todo;
  }

  addTodo(): void {
    this.todos.push(this.todo);
  }

  removeTodo(todo: string): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
