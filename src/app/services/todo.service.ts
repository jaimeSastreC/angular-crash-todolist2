import { Injectable } from '@angular/core';
// alows to inject in a constructor in Component
// in app.module.ts add HttpClientModule in imports
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/jon'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // add to constructor Http
  // make a getrequest to Json placeholder => URL as a property to this service / class
  // todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=7';
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=7';



  constructor(private http: HttpClient) { }
  // Get Todos - to get this todos => bring service in todos.component.ts
  getTodos(): Observable <Todo[]> {
    return this.http.get <Todo[]> (`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todo - delete request + ID
  deleteTodo(todo: Todo): Observable <Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete <Todo> (url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable <Todo> {
    return this.http.post <Todo>(this.todosUrl, todo, httpOptions);
  }

  // Toggle Completed => Put request
  toggleCompleted(todo: Todo): Observable<any> {
    // attention accent `/£ touche
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

}


  /*
  getTodos() {
    return  [
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
  }  */

