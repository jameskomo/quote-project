import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('', '', '', ''),
    new Quote('', '', '', ''),
    new Quote('', '', '', ''),
    new Quote('', '', '', ''),
    new Quote('', '', '', ''),
  ];
  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}
