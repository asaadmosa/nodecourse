import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoItem } from 'src/app/models/todoItem.model';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItems : TodoItem[] | undefined;  
  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
  }

  getTodoItems(groupId:string){
      this.todoService.getTodoItems(groupId).subscribe(result=>{
      this.todoItems = result.$values;
    });
  }  

}
