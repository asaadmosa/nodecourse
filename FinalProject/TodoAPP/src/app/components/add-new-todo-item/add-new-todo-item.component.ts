import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-add-new-todo-item',
  templateUrl: './add-new-todo-item.component.html',
  styleUrls: ['./add-new-todo-item.component.css']
})
export class AddNewTodoItemComponent implements OnInit {

  todoItemForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  buildForm(){
    this.todoItemForm = this.formBuilder.group(
      {
        name: '',
        description: '',
      }
    );
  }

  async save(){
    await this.todoService.addNewTodoItem(this.todoItemForm.value).toPromise();
    this.router.navigate(['/','TodoGroup']);
  }

}
