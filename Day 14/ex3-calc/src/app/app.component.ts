import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ex3-calc';
  // data
  a: string = '';
  b: string= '';
  results: string[] = [];
  isBusy: boolean = false;
  // methods
  setKeyworda(a: string) {
      this.a = a;
  }

  setKeywordb(b: string) {
    this.b = b;
  }
  claculate() {
    let calcolator = new calc( Number(this.a) ,Number(this.b));
      this.isBusy = true;

      setTimeout(() => {
          this.isBusy = false;
          this.results = [
              "a + b = "+ calcolator.add(),
              "a - b = "+ calcolator.subtract(),
              "a * b = "+ calcolator.multiply()
          ];
      } , 2000);
  }
}


class calc{
  constructor(
    private a: number, 
    private b: number
) {}
add(): number {
  return this.a + this.b;
}

subtract(): number {
  return this.a - this.b;
}

multiply(): number {
  return this.a * this.b;
}

}

