import { Quote } from '../quote';
import { OnInit } from '@angular/core';

export class QuoteFormComponent implements OnInit {
  newQuote = new Quote('', '', '', new Date(), 0, 0);
         ngOnInit(): void {
           throw new Error('Method not implemented.');
         }
       }
