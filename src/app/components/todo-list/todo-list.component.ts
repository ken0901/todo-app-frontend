import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos = [
    {id: 1, description: 'Learn to Dance'},    
    {id: 2, description: 'Learn to Coding'},
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
