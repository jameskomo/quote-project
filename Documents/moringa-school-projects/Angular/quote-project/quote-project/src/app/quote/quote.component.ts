import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'', '', '', ''),
    new Quote(2,'', '', '', ''),
    new Quote(3,'', '', '', ''),
    new Quote(4, '', '', '', ''),
    new Quote(5, '', '', '', ''),
  ];
  completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }

  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}
