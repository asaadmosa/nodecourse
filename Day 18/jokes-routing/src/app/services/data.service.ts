import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCaptionsOfJokes(): Promise<string[]> {
     const url = `${this.baseUrl}/jokes`;

        return this.http
            .get<Joke[]>(url)
            .pipe(map(list => list.map(m => m.punchline)))
            .toPromise();
  }
  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke>{
    const url = `${this.baseUrl}/jokes`;
    return this.http
            .get<Joke[]>(url)
            .pipe(map(list => list[index-1]),
                  filter(j => j.punchline===keyword))
            .toPromise();
  }
}
