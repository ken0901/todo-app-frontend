import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/components/todo-list/todo-list.component';
import { API_URL,TODO_JPA_API_URL } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.http.delete(`${TODO_JPA_API_URL}/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${TODO_JPA_API_URL}/${username}/todos/${id}`,todo);
  }

  createTodo(username, todo){
    return this.http.post(`${TODO_JPA_API_URL}/${username}/todos`,todo);
  }
}
