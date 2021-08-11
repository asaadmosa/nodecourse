import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ReactiveTodoService } from './core/services/reactive-todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {

  }
}
