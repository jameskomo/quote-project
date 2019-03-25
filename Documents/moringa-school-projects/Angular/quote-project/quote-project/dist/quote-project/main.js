(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote></app-quote>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _highlight_votes_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./highlight-votes.directive */ "./src/app/highlight-votes.directive.ts");
/* harmony import */ var _time_count_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time-count.pipe */ "./src/app/time-count.pipe.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__["QuoteComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_8__["QuoteDetailsComponent"],
                _highlight_votes_directive__WEBPACK_IMPORTED_MODULE_9__["HighlightVotesDirective"],
                _time_count_pipe__WEBPACK_IMPORTED_MODULE_10__["TimeCountPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highlight-votes.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/highlight-votes.directive.ts ***!
  \**********************************************/
/*! exports provided: HighlightVotesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightVotesDirective", function() { return HighlightVotesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightVotesDirective = /** @class */ (function () {
    function HighlightVotesDirective(elem) {
        this.elem = elem;
        this.elem.nativeElement.style.color = 'highlight-highest';
    }
    HighlightVotesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlightVotes]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightVotesDirective);
    return HighlightVotesDirective;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: darkslategrey\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5XG59Il19 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Nav Bar</title>\n</head>\n<body>\n  <h1>Nav Bar works</h1>\n  \n</body>\n</html>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Posted by: {{quote.poster}}</span>\n<span> {{quote.posttime|timeCount}} hours ago</span>"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(text, author, poster, posttime, upvotes, downvotes) {
        this.text = text;
        this.author = author;
        this.poster = poster;
        this.posttime = posttime;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author {\n  font-style: italic;\n  font-weight: bold;\n  text-align: right;\n}\n\n.btn {\n  margin: 10px;\n}\n\n.card {\n  margin: 20px;\n}\n\n.card-body {\n  text-align: center;\n  color: #ffffff;\n}\n\n.action {\n  text-align: center;\n  color: #777777;\n  font-size: 20px;\n}\n\nform {\n  padding: 20px;\n  background-color: #acc6aa;\n  width: 90%;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 2;\n  left: 5%;\n}\n\nlabel {\n  font-weight: bold;\n  color: #ffffff;\n  letter-spacing: 2px;\n}\n\n.cancel-form {\n  text-align: right;\n}\n\n.form-btn {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card:nth-child(6n-5) {\n  background-color: #0088ff;\n}\n\n.card:nth-child(6n-4) {\n  background-color: #ffaa00;\n}\n\n.card:nth-child(6n-3) {\n  background-color: #ff7700;\n}\n\n.card:nth-child(6n-2) {\n  background-color: #ff0033;\n}\n\n.card:nth-child(6n-1) {\n  background-color: #9911aa;\n}\n\n.card:nth-child(6n+0) {\n  background-color: #5ebd3e;\n}\n\n.card-footer {\n  background-color: #eeeeee;\n}\n\n.fa-quote-left {\n  float: left;\n  font-size: 30px;\n}\n\n.del {\n  color: red;\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS9xdW90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhvciB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNjNmFhO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDUlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmNhbmNlbC1mb3JtIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb3JtLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jYXJkOm50aC1jaGlsZCg2bi01KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZmY7XG59XG5cbi5jYXJkOm50aC1jaGlsZCg2bi00KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDA7XG59XG5cbi5jYXJkOm50aC1jaGlsZCg2bi0zKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc3MDA7XG59XG5cbi5jYXJkOm50aC1jaGlsZCg2bi0yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMzM7XG59XG5cbi5jYXJkOm50aC1jaGlsZCg2bi0xKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTExYWE7XG59XG5cbi5jYXJkOm50aC1jaGlsZCg2biswKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZWJkM2U7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5mYS1xdW90ZS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmRlbCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <button (click)=\"onNew()\" class=\"btn btn-info form-btn\" id=\"form-btn\">Post a new quote</button>\n\n    <form (ngSubmit)=\"onSave()\" *ngIf=\"showNew\" id=\"quote-form\">\n\n      <span (click)=\"onCancel()\" class=\"del\"></span>\n\n      <div class=\"form-group\">\n        <label for=\"text-input\">Quote</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"quoteModel.text\" placeholder=\"Write your quote here\" rows=\"6\"\n          name=\"text\" id=\"text-input\" required></textarea>\n        <div class=\"alert alert-danger\" *ngIf=\"text-input.touched && !text-input.valid\">\n          You must enter a quote\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"author-input\">Author</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"quoteModel.author\" name=\"author\" id=\"author-input\"\n          placeholder=\"Quote Author\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"poster-input\">Poster</label>\n        <input id=\"poster-input\" class=\"form-control\" type=\"text\" [(ngModel)]=\"quoteModel.poster\" name=\"poster\"\n          placeholder=\"Your name\" required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success btn-lg\">Add Quote</button>\n      <button id=cancelQuote class=\"btn btn-warning\" (click)='onCancel()'>Cancel</button>\n    </form>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"card-columns\">\n\n        <div class=\"card\" *ngFor='let quote of quotes;let i = index'>\n          <div class=\"card-body\">\n            <p appHighlight>{{quote.text}} </p>\n            <p>{{quote.author}}</p>\n          </div>\n          <div class=\"card-footer\">\n            <app-quote-details [quote]='quote'></app-quote-details>\n            <span (click)=\"delete(i)\" class=\"del\"></span>\n          </div>\n\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col-3 action\">\n                {{quote.upvotes}}\n              </div>\n              <div class=\"col-3 action\" (click)=\"quote.upvotes = quote.upvotes + 1\">\n                <i class=\"fa fa-thumbs-up\"></i>\n              </div>\n              <div class=\"col-3 action\" (click)=\"quote.downvotes = quote.downvotes + 1\">\n                <i class=\"fa fa-thumbs-down\"></i>\n              </div>\n              <div class=\"col-3 action\">\n                {{quote.downvotes}}\n              </div>\n               <button class=\"btn btn-danger\" (click)='delete(i)'>Delete Quote </button>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        // It maintains quote form display status. By default it will be false.
        // tslint:disable-next-line: ban-types
        this.showNew = false;
        // It will be either 'Save' or 'Update' based on operation.
        this.submitType = 'Save';
        this.quotes = [
            // tslint:disable-next-line: max-line-length
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"]('If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?', 'Laurence J. Peter', 'User1', new Date(), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"]('Trust yourself. You know more than you think you do.', 'Benjamin Spock', 'User2', new Date(), 0, 0),
        ];
    }
    // Creates new quote when called
    QuoteComponent.prototype.onNew = function () {
        // Initiate new quote.
        this.quoteModel = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"]('', '', '', new Date(), 0, 0);
        this.submitType = 'Save';
        // display quote entry section.
        this.showNew = true;
    };
    QuoteComponent.prototype.onSave = function () {
        if (this.submitType === 'Save') {
            // Push quote model object into quote list.
            this.quotes.push(this.quoteModel);
        }
        // Hide quote entry section.
        this.showNew = false;
    };
    // This method associate to Cancel Button.
    QuoteComponent.prototype.onCancel = function () {
        // Hide quote entry section.
        this.showNew = false;
    };
    QuoteComponent.prototype.delete = function (i) {
        this.quotes.splice(i, 1);
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/time-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time-count.pipe.ts ***!
  \************************************/
/*! exports provided: TimeCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCountPipe", function() { return TimeCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeCountPipe = /** @class */ (function () {
    function TimeCountPipe() {
    }
    TimeCountPipe.prototype.transform = function (value) {
        var today = new Date();
        var dateDifference = Math.abs(value - today);
        var secondsInAnHour = 3600;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = Math.round(dateDifferenceSeconds / secondsInAnHour);
        if (dateCounter >= 1) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    TimeCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timeCount'
        })
    ], TimeCountPipe);
    return TimeCountPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/komo/Documents/moringa-school-projects/Angular/quote-project/quote-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map