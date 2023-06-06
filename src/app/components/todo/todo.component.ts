import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { Todo } from '../todo-list/todo-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false,new Date());
    this.todoService.retrieveTodo('ken', this.id).subscribe(
      data => {
        this.todo = data;
      }
    );
  }

  updateTodo(){
    this.todoService.updateTodo('ken',this.id,this.todo).subscribe(
      data => {
        this.router.navigate(['/todos']);
      }
    );
  }
}
