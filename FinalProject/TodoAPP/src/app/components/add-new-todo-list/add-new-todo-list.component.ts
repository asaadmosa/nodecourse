import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';


@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.css']
})
export class AddNewTodoListComponent implements OnInit {
  todoListForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private todoService: ReactiveTodoService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.todoListForm = this.formBuilder.group(
      {
        Id: AddNewTodoListComponent.newGuid(),
        Capation: '',
        Description: '',
        ImageUrl: '',
        Color: '',
        Items:null,
      }
    );
  }

  async save(){
    await this.todoService.addNewTodoList(this.todoListForm.value);
    this.router.navigate(['/','lists']);
  }


  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}