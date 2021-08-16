import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { filter, map, switchMap } from 'rxjs/operators';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';
import { Items, TodoItem, TodoList } from 'src/app/models/todo.model';
import { TodoItemsComponent } from '../todo-items/todo-items.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList!: TodoList;
  todoListItems!: TodoItem[];
  todoItemForm!: FormGroup;
  todoListForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoService: ReactiveTodoService) { }

  ngOnInit(): void {
    const result = this.activatedRoute.params
      .pipe(
        map(t => t.id),//map according to id
        filter(t => t),//only if there is todoList
        switchMap(id => this.todoService.getTodoList(id))//switch to observable of product
      ) .subscribe(o=>{
        this.buildForm(o);
        this.todoList=o;
        this.todoListItems=o.items.$values;
      });
    }



  async deleteTodoList(id: string) {
    try {
      await this.todoService.deleteTodoList(id);
      this.router.navigate(['/', 'lists']);
    } catch (error) {
      alert(error);
    }
  }


  buildForm(t: TodoList) {
    this.todoList=t;
    this.todoItemForm = this.formBuilder.group(
      {
        Id: TodoListComponent.newGuid(),
        name: '',
        description: '',
        isCompleted: false,
        currentListId: t.id,
        currentList: t
      }
    );
  }

  async save() {
    console.log(this.todoItemForm.value);
    await this.todoService.addNewTodoItem(this.todoItemForm.value);
    await this.router.navigate(['/', 'lists']);
  }


  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
