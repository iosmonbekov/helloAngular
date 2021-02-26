import { Component } from '@angular/core';

interface Todo {
  text: string;
  finished: boolean;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';

  todos: Todo[] = [];

  addTodo(todoText: string) {
    if (this.todos.length === 0) {
      this.todos.push({ text: todoText, finished: false, id: 0 });
    } else {
      this.todos.push({
        text: todoText,
        finished: false,
        id: this.todos[this.todos.length - 1].id + 1,
      });
    }
  }
  deleteTodo(index: number) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
  }
}
