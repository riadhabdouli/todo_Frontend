import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../../../services/todo.service';

import { Todo } from '../../../../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(); // Initialize the todo property

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
    this.todo = new Todo(); // Initialize the todo property in the constructor

  }

  ngOnInit(): void {}

  // Set Dynamic classes
  setClasses(): any {
    return {
      todo: true,
      'is-complete': this.todo.completed
    };
  }

  async onToggle(todo: Todo): Promise<void> {
    const todoToggled = todo;
    todoToggled.completed = !todo.completed;

    await this.todoService.toggleCompleted(todoToggled).subscribe(
      (todo) => {
        this.todo.completed = todo.completed;
      },
      (e) => {
        alert(e.error);
      }
    );
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
  
}
