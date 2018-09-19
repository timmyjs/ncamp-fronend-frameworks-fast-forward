import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {

  @Input() username: string;

  @Output() onChangeUsername = new EventEmitter<string>();
  @Output() onSaveUsername = new EventEmitter();

  onChange(username: string): void {
    this.onChangeUsername.emit(username);
  }

  onClick(): void {
    this.onSaveUsername.emit();
  }
}
