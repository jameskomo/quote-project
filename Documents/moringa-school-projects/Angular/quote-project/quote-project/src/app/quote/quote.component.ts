import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son'),

  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  toogleDetails(index: string | number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }
  ngOnInit() {
  }

}
