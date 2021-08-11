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
  counterItems$!: Promise<string>;
  counterActiveItems$!: Promise<string>;
  constructor(private todoService: ReactiveTodoService){}
  ngOnInit(): void {
    this.counter$ =this.todoService.todoLists$.pipe(
      map(list=>list.length),
      distinctUntilChanged());

    this.counterItems$= this.todoService.todoListsItemsTotal$.then(value => value.toString());
    this.counterActiveItems$=this.todoService.todoListsActiveItemsTotal$.then(value => value.toString());
    this.todoService.loadTodoLists();
  }

}
