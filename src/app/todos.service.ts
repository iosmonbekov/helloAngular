import { Injectable } from '@angular/core';

export interface Todo {
  text: string;
  finished: boolean;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

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

  constructor() {}
}
