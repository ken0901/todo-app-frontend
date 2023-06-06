import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  message: string;
  
  // Dummy data
  // todos = [
  //   new Todo(1,'Learn to Dance',false, new Date()),
  //   new Todo(2,'Learn Coding Language',false, new Date()),
  //   new Todo(3,'Learn Game Development',false, new Date()),
  // ]
  

  constructor(private todoService: TodoDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('ken').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo('ken',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    this.router.navigate(['todos',id]);
  }
}
