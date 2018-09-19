import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-output',
  templateUrl: './user-output.component.html'
})
export class UserOutputComponent {

  @Input() username: string;

}
