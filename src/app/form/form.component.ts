import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  value = '';
  @Output() todoText = new EventEmitter();
  addTodo() {
    if (this.value) {
      this.todoText.emit(this.value);
      this.value = '';
    }
  }
  inputHandler(val: string) {
    this.value = val;
  }
}
