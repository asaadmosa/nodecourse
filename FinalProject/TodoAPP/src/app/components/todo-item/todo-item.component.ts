import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoItem } from 'src/app/models/todoItem.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  todoItem!: TodoItem;  
  constructor(private todoService: TodoService) { }


  ngOnInit(): void {

  }

  getTodoItem(groupId: string,itemId: string){
    this.todoService.getTodoItem(groupId,itemId).subscribe(result=>{
      this.todoItem = result;
    });
  }


}
