import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/components/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
}
