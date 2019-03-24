import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightVotesDirective } from './highlight-votes.directive';
import { TimeCountPipe } from './time-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightVotesDirective,
    TimeCountPipe,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
