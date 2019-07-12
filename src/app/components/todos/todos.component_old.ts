// idem App component + OnInit
import { Component, OnInit } from '@angular/core';
// adding service
import { TodoService} from '../../services/todo.service';


import {Todo} from '../../models/Todo';

@Component({
  // selector !!!
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

// implements OnInit
export class TodosComponent implements OnInit {
  // here stored in component; but usually Json placeholder fetched through a service
  // creat mapsfolder with 'Todo' object Model!! app>models>Todo.ts
  todos: Todo[];

  // constructor used to import services
  constructor(private todoService: TodoService) {  }



// uses ngOnInit, lifecycle method, like a constructor
  // later move it to a service to modify backend
  ngOnInit() {
  // this.todos = this.todoService.getTodos();
  this.todoService.getTodos().subscribe(
    todos => {
      this.todos = todos;
      });
  }

  // from todo-item.component.html receive command
  deleteTodo(todo: Todo) {
    // console.log('delete me');
    // REMOVE - like a loop and  map - UI show all except those who == todo.id
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // REMOVE from Server - on service API back - gives an observable - create deleteTodo method in service
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
    // première méthode en dur
    /*this.todos =
      [
        {
          id:1,
          title: 'Todo One',
          completed: false,
        },
        {
          id:1,
          title: 'Todo Two',
          completed: true,
        },
        {
          id:1,
          title: 'Todo Three',
          completed: false,
        }

      ];
  }*/



