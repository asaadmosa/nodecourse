import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { QuestionService } from './services/question.service';
import { debounceTime, distinctUntilChanged, map, mapTo, mergeMap, switchMap } from 'rxjs/operators';
import { question } from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isDone$!: Observable<boolean> ;
  search$ :new BehaviorSubject<number>(0);
  result$! : Observable<question []>;
  
  constructor(private questions: QuestionService){
    
  }
  ngOnInit(): void {
    this.results$ = this.search$.pipe(
      debounceTime(500),
      switchMap(kw => this.colorsService.search(num)));
      
    let true$ = this.search$.pipe(mapTo(true));
    let false$ = this.results$.pipe(mapTo(false));
    let merged$ = merge(true$, false$);

    this.isBusy$ = merged$.pipe(
        distinctUntilChanged()
    );
  }
  

  

 
}

