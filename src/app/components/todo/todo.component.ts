import { Component } from '@angular/core';
import { Todo } from '~/app/services/todo.model';
import { TodoService } from '~/app/services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todoListFinal: Todo[];

  constructor(private todoService: TodoService) {
    this.todoListFinal = this.todoService.getAllTodos();
  }

  addTodo() {
    console.log('TAPPING');
    this.todoService.generateRandomTodo();
  }
}
