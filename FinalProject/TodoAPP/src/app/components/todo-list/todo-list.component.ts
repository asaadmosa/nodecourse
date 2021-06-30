import { Component, OnInit } from '@angular/core';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';
import { TodoList } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList!: TodoList;
  constructor(private todoService: ReactiveTodoService) { }

  ngOnInit(): void {
  }

  getTodoList(groupId: string){
    this.todoService.getTodoList(groupId).subscribe(result=>{
      this.todoList = result;
    });
  }
}
