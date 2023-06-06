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
  isSaveBtn: boolean = false;

  constructor(private todoService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date());

    if(this.id != -1){
      this.isSaveBtn = !this.isSaveBtn;
      this.todoService.retrieveTodo('ken', this.id).subscribe(
        data => {
          this.todo = data;
        }
      );
    }
  }

  updateTodo(){
    if(this.id === -1){
      //create Todo
      this.todoService.createTodo('ken',this.todo).subscribe(
        data => {
          this.router.navigate(['/todos']);
        }
      );
    }else{
      this.todoService.updateTodo('ken',this.id,this.todo).subscribe(
        data => {
          this.router.navigate(['/todos']);
        }
      );
    }
  }
}
