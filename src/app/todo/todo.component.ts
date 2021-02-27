import { Component } from '@angular/core';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
  constructor(private todoService: TodosService) {
    this.todos = todoService.getTodos();
  }
}
