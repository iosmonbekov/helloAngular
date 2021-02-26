import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: any;

  @Output() index = new EventEmitter();
  deleteTodo(index: number) {
    this.index.emit(index);
  }
}
