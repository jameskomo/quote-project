# QuoteProject

This is an Angular Project where users can create quotes and have those quotes voted on whether they are terrible or are inspirational. As a user you will be able to:  Create a new quote. Upvote or downvote a quote. Delete a quote See the number of upvotes and number of downvotes for each quote.

Version 1.0.0

## Author Information

James Komo

## Demo Website
To test this website here is a live demo of the site https://jameskomo.github.io/quote-project/.

You need a smartphone, laptop, desktop or any gadget sreen accessible to internet. Open from a friendly browser.

## Behaviour Driven Development (BDD)
| Input                    	| Ouput                                                                                        	|
|--------------------------	|----------------------------------------------------------------------------------------------	|
| User clicks Post a Quote 	| Quote form displays with input fields for Author, Title, Quote and Poster Name.              	|
| User clicks Add Quote    	| The quote is added as a card with Author, Title, Quote and Poster Name information included  	|
| User Clicks Delete       	| The quote is purged from view                                                                	|
| User clicks Cancel       	| The main view displays and the quote is not added                                            	|
| User clicks Thumbs UP    	| The thumbs up icon imported from Fontawesome increments the upvote value by 1 on each click  	|
| User clicks Thumbs DOWN  	| The thumbs up icon imported from Fontawesome decreased the downvote value by 1 on each click 	|


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
