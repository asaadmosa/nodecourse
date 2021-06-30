import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  captions$!: Promise<string[]>;
  private punchline$ = new BehaviorSubject<string>('');
  joke$! : Observable<Joke>;

  constructor(
    private data: DataService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.captions$=this.data.getCaptionsOfJokes();
  }

  search(punchline: string) {
    console.log(this.punchline$.next(punchline));
    this.punchline$.next(punchline);
  }
}


