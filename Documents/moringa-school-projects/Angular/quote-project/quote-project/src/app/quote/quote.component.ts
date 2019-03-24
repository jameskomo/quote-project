import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('', ',', ',', ','),
    new Quote('', ',', ',', ','),
    new Quote('', ',', ',', ','),
    new Quote('', ',', ',', ','),
    new Quote('', ',', ',', ',')
  ];
  constructor() { }

  ngOnInit() {
  }

}
