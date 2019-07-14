import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // input property
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter <Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set dynamic Class
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  // onToggle event captured => action method
  onToggle(todo) {
    // console.log('toggle');
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server ; returns an observable
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  // onDelete event captures delete click => action
  // need to access todo in the UI
  onDelete(todo) {
    // console.log('delete');
    // emet commande => Output
    this.deleteTodo.emit(todo);
  }
}

