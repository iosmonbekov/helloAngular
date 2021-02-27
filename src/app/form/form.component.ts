import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  text: string = '';

  inputHandler(val: string) {
    this.text = val;
  }

  addTodo() {
    this.todoService.addTodo(this.text);
    this.text = '';
  }
  constructor(private todoService: TodosService) {}
}
