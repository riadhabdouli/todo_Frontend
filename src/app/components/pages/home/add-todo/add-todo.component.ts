import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }
}
