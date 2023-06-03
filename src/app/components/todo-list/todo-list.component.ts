import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';

export class Todo {
  constructor(public id: number,
              public description: string,
              public done: boolean,
              public targetDate: Date){}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos: Todo[] = [];
  
  // Dummy data
  // todos = [
  //   new Todo(1,'Learn to Dance',false, new Date()),
  //   new Todo(2,'Learn Coding Language',false, new Date()),
  //   new Todo(3,'Learn Game Development',false, new Date()),
  // ]
  

  constructor(private todoService: TodoDataService) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('ken').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

}
