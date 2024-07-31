import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Essentials';
  environment = EnvironmentName.Prod;

  // KeyUp Event Handling Example

  // message = signal<string>('');
  // onKeyUp(event: KeyboardEvent) {
  //   const inputElement = event.target as HTMLInputElement;
  //   this.message.set(inputElement.value);
  // }
}

enum EnvironmentName {
  Dev = 'dev',
  Test = 'test',
  Prod = 'prod'
}


