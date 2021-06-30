import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-colors-input',
  templateUrl: './colors-input.component.html',
  styleUrls: ['./colors-input.component.css']
})
export class ColorsInputComponent implements OnInit {
  
  private red: number =0;
  private green: number =0;
  private blue: number =0;
  private red$ = new BehaviorSubject<number>(this.red);
  private green$ = new BehaviorSubject<number>(this.green);
  private blue$ = new BehaviorSubject<number>(this.blue);
  constructor() { }

  ngOnInit(): void {
  }

  
  GetRed(): Observable<number> {
    return this.red$.asObservable();
  }

  GetGreen(): Observable<number> {
    return this.green$.asObservable();
  }

  GetBlue(): Observable<number> {
    return this.blue$.asObservable();
  }
  
  SetRed(value: string) {
    this.red = Number(value);
  }

  SetGreen(value: string) {
    this.green = Number(value);
  }

  SetBlue(value: string) {
    this.blue = Number(value);
  }
}
