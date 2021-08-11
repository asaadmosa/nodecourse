import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';
import { TodoList } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {

  todoLists$!: Observable<TodoList[]>;
  constructor(private todoService: ReactiveTodoService) { }

  ngOnInit(): void {
    this.todoLists$=this.todoService.todoLists$
  }

  async deleteTodoList(id : string){
    try{
      await this.todoService.deleteTodoList(id);
    }catch(error){
      alert(error);
    }
  }

}
