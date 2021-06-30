import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { filter, map, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoList } from 'src/app/models/todo.model';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.css']
})
export class EditTodoListComponent implements OnInit {

  todoListForm!: FormGroup;
  
  constructor(
    private router: Router,
    private todoListFormBuilder :FormBuilder,
    private activatedRoute :ActivatedRoute ,
    private todoService: ReactiveTodoService) { }

  ngOnInit(): void {
    const result = this.activatedRoute.params
    .pipe(
      map(t=> t.id),//map according to id
      filter(t=> t),//only if there is todoList
      switchMap(id=>this.todoService.getTodoList(id))//switch to observable of product
      ).subscribe(o=>{
        this.buildForm(o);
      });
  }

  buildForm(t: TodoList){
    this.todoListForm =this.todoListFormBuilder.group({
      Id: [t.id],
      Capation: [t.capation,[Validators.required]],
      Description: [t.description],
      ImageUrl: [t.imageUrl],
      Color: [t.color],
      Items: [t.items].forEach(element => {
        element.$values
      })
    });
  }

  async save(){
    await this.todoService.save(this.todoListForm.value);
    this.router.navigate(['/','lists']);
  }
}
