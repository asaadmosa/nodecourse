import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ReactiveTodoService } from 'src/app/core/services/reactive-todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter$!: Observable<number>;
  counterItems$!: string;
  counterActiveItems$!: string;
  constructor(private todoService: ReactiveTodoService){}
  ngOnInit(): void {
    this.counter$ =this.todoService.todoLists$.pipe(
      map(list=>list.length),
      distinctUntilChanged());

    this.counterItems$=this.todoService.todoListsItems$.toString();
    this.counterActiveItems$=this.todoService.todoListsActiveItems$.toString();
    this.todoService.loadTodoLists();
  }

}
