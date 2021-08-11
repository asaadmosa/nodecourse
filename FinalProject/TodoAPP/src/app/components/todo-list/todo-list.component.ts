import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';
import { TodoList } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList!:TodoList;
  constructor(
    private activatedRoute :ActivatedRoute ,
    private todoService: ReactiveTodoService) { }

  ngOnInit(): void {
    const result = this.activatedRoute.params
    .pipe(
      map(t=> t.id),//map according to id
      filter(t=> t),//only if there is todoList
      switchMap(id=>this.todoService.getTodoList(id))//switch to observable of product
      ).subscribe(list=>this.todoList=list);
  }

}
