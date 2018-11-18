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

/***/ "./src/app/actions/tax-calculator.action.ts":
/*!**************************************************!*\
  !*** ./src/app/actions/tax-calculator.action.ts ***!
  \**************************************************/
/*! exports provided: CALCULATE_TAX, CALCULATE_TAX_COMPLETE, CalculateTaxAction, CalculateTaxCompleteAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALCULATE_TAX", function() { return CALCULATE_TAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALCULATE_TAX_COMPLETE", function() { return CALCULATE_TAX_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateTaxAction", function() { return CalculateTaxAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateTaxCompleteAction", function() { return CalculateTaxCompleteAction; });
var CALCULATE_TAX = 'CALCULATE_TAX';
var CALCULATE_TAX_COMPLETE = 'CALCULATE_TAX_COMPLETE';
var CalculateTaxAction = /** @class */ (function () {
    function CalculateTaxAction(payload) {
        this.payload = payload;
        this.type = CALCULATE_TAX;
    }
    return CalculateTaxAction;
}());

var CalculateTaxCompleteAction = /** @class */ (function () {
    function CalculateTaxCompleteAction(payload) {
        this.payload = payload;
        this.type = CALCULATE_TAX_COMPLETE;
    }
    return CalculateTaxCompleteAction;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Tax Estimation Calculator</span>\n  </mat-toolbar>\n<tax-calculator></tax-calculator>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FlickrFeeds';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _reducers_tax_calculator_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/tax-calculator.reducer */ "./src/app/reducers/tax-calculator.reducer.ts");
/* harmony import */ var _effects_tax_calculator_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/tax-calculator.effect */ "./src/app/effects/tax-calculator.effect.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tax_calculator_tax_calculator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tax-calculator/tax-calculator.component */ "./src/app/components/tax-calculator/tax-calculator.component.ts");
/* harmony import */ var _components_tax_calculator_details_tax_calculator_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tax-calculator-details/tax-calculator-details.component */ "./src/app/components/tax-calculator-details/tax-calculator-details.component.ts");
/* harmony import */ var _services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/tax-calculator.service */ "./src/app/services/tax-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_tax_calculator_tax_calculator_component__WEBPACK_IMPORTED_MODULE_12__["TaxCalculatorComponent"],
                _components_tax_calculator_details_tax_calculator_details_component__WEBPACK_IMPORTED_MODULE_13__["TaxCalculatorDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({ taxStore: _reducers_tax_calculator_reducer__WEBPACK_IMPORTED_MODULE_8__["taxCalculatorReducer"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_effects_tax_calculator_effect__WEBPACK_IMPORTED_MODULE_9__["TaxCalculatorEffects"]])
            ],
            providers: [_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_14__["TaxCalculatorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/tax-calculator-details/tax-calculator-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tax-calculator-details/tax-calculator-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n    <!-- Gross Column -->\r\n    <ng-container matColumnDef=\"gross\">\r\n      <mat-header-cell *matHeaderCellDef> Gross </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.gross | currency:'USD':true:'1.2-2'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Superannuation Column -->\r\n    <ng-container matColumnDef=\"super\">\r\n      <mat-header-cell *matHeaderCellDef> Superannuation </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.super | currency:'USD':true:'1.2-2'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Gross + Supperannuation Column -->\r\n    <ng-container matColumnDef=\"grossSuper\">\r\n      <mat-header-cell *matHeaderCellDef> Gross + Supperannuation </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{(element.gross + element.super) | currency:'USD':true:'1.2-2'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Tax Column -->\r\n    <ng-container matColumnDef=\"tax\">\r\n      <mat-header-cell *matHeaderCellDef> Tax </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.tax | currency:'USD':true:'1.2-2'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Net Column -->\r\n    <ng-container matColumnDef=\"net\">\r\n      <mat-header-cell *matHeaderCellDef> Net </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{(element.gross - element.tax) | currency:'USD':true:'1.2-2'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Net + Supperannuation Column -->\r\n    <ng-container matColumnDef=\"netSuper\">\r\n      <mat-header-cell *matHeaderCellDef> Net + Supperannuation </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{(element.gross - element.tax + element.super) | currency:'USD':true:'1.2-2'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"taxColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: taxColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/tax-calculator-details/tax-calculator-details.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tax-calculator-details/tax-calculator-details.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  max-width: 80%;\n  margin: 2em auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXgtY2FsY3VsYXRvci1kZXRhaWxzL0M6XFxVc2Vyc1xcU2hpdmFrYW50aFxcRG9jdW1lbnRzXFxWaXN1YWwgU3R1ZGlvIDIwMTdcXFByb2plY3RzXFxGbGlja3JGZWVkcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGF4LWNhbGN1bGF0b3ItZGV0YWlsc1xcdGF4LWNhbGN1bGF0b3ItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RheC1jYWxjdWxhdG9yLWRldGFpbHMvdGF4LWNhbGN1bGF0b3ItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tax-calculator-details/tax-calculator-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tax-calculator-details/tax-calculator-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TaxCalculatorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorDetailsComponent", function() { return TaxCalculatorDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_result_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/result.model */ "./src/app/models/result.model.ts");
/* harmony import */ var _models_tax_calculator_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/tax-calculator.datasource */ "./src/app/models/tax-calculator.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaxCalculatorDetailsComponent = /** @class */ (function () {
    function TaxCalculatorDetailsComponent() {
    }
    TaxCalculatorDetailsComponent.prototype.ngOnChanges = function (changes) {
        if (this.taxDetails) {
            this.dataSource = new _models_tax_calculator_datasource__WEBPACK_IMPORTED_MODULE_2__["TaxCalculatorDataSource"]([this.taxDetails.taxStore]);
        }
    };
    Object.defineProperty(TaxCalculatorDetailsComponent.prototype, "taxColumns", {
        get: function () {
            return _models_result_model__WEBPACK_IMPORTED_MODULE_1__["ResultColumns"];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_result_model__WEBPACK_IMPORTED_MODULE_1__["ResultStore"])
    ], TaxCalculatorDetailsComponent.prototype, "taxDetails", void 0);
    TaxCalculatorDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tax-calculator-details',
            template: __webpack_require__(/*! ./tax-calculator-details.component.html */ "./src/app/components/tax-calculator-details/tax-calculator-details.component.html"),
            styles: [__webpack_require__(/*! ./tax-calculator-details.component.scss */ "./src/app/components/tax-calculator-details/tax-calculator-details.component.scss")]
        })
    ], TaxCalculatorDetailsComponent);
    return TaxCalculatorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/tax-calculator/tax-calculator.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tax-calculator/tax-calculator.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>Income Details</mat-card-title>\r\n    <mat-card-content>\r\n        <form>\r\n            <!-- Income Field -->\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Income\" type=\"number\" [formControl]=\"income\" (keyup)=\"search()\" required>\r\n                <span matPrefix>$&nbsp;</span>\r\n                <mat-error *ngIf=\"income.invalid\">{{validateIncome}}</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- Superannuation Field -->\r\n            <mat-form-field [hintLabel]=\"superHint\">\r\n                <input matInput placeholder=\"Superannuation\" [formControl]=\"super\" (keyup)=\"search()\" required>\r\n                <span matSuffix>%</span>\r\n                <mat-error *ngIf=\"super.invalid\">{{validateSuper}}</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!--Is Superannuation Included -->\r\n            <mat-checkbox color=\"primary\" [formControl]=\"isSuperIncluded\" (change)=\"search()\">\r\n                Includes Superannuation\r\n            </mat-checkbox>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>\r\n<tax-calculator-details [taxDetails]=\"result | async\"></tax-calculator-details>"

/***/ }),

/***/ "./src/app/components/tax-calculator/tax-calculator.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/tax-calculator/tax-calculator.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 30%;\n  margin: 2em auto; }\n\nform {\n  display: flex;\n  flex-direction: column; }\n\nmat-form-field {\n  padding-bottom: 1em; }\n\nform > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXgtY2FsY3VsYXRvci9DOlxcVXNlcnNcXFNoaXZha2FudGhcXERvY3VtZW50c1xcVmlzdWFsIFN0dWRpbyAyMDE3XFxQcm9qZWN0c1xcRmxpY2tyRmVlZHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRheC1jYWxjdWxhdG9yXFx0YXgtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakI7O0FBRUM7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUdIO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXgtY2FsY3VsYXRvci90YXgtY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG59XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgfVxyXG5cclxuXHJcbmZvcm0gPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tax-calculator/tax-calculator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tax-calculator/tax-calculator.component.ts ***!
  \***********************************************************************/
/*! exports provided: TaxCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorComponent", function() { return TaxCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_query_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/query.model */ "./src/app/models/query.model.ts");
/* harmony import */ var _reducers_tax_calculator_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/tax-calculator.reducer */ "./src/app/reducers/tax-calculator.reducer.ts");
/* harmony import */ var _actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/tax-calculator.action */ "./src/app/actions/tax-calculator.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaxCalculatorComponent = /** @class */ (function () {
    function TaxCalculatorComponent(store) {
        this.store = store;
        this.income = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageEmpty"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_query_model__WEBPACK_IMPORTED_MODULE_3__["incomeRegex"])]);
        this.super = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_models_query_model__WEBPACK_IMPORTED_MODULE_3__["superAnnuationDefault"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.superValueCheck]);
        this.isSuperIncluded = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.result = store.select(_reducers_tax_calculator_reducer__WEBPACK_IMPORTED_MODULE_4__["taxStore"]);
    }
    Object.defineProperty(TaxCalculatorComponent.prototype, "validateIncome", {
        get: function () {
            if (this.income.hasError(_models_query_model__WEBPACK_IMPORTED_MODULE_3__["required"])) {
                return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageRequired"];
            }
            else if (this.income.hasError(_models_query_model__WEBPACK_IMPORTED_MODULE_3__["pattern"])) {
                return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageInvalidIncome"];
            }
            else {
                return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageEmpty"];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxCalculatorComponent.prototype, "validateSuper", {
        get: function () {
            if (this.super.hasError(_models_query_model__WEBPACK_IMPORTED_MODULE_3__["required"])) {
                return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageRequired"];
            }
            else if (this.super.hasError(_models_query_model__WEBPACK_IMPORTED_MODULE_3__["invalidsuper"])) {
                return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageInvalidSuper"];
            }
            else {
                return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["messageEmpty"];
            }
        },
        enumerable: true,
        configurable: true
    });
    TaxCalculatorComponent.prototype.superValueCheck = function (input) {
        var isValid = input.value >= 9.5;
        return isValid ? null : { invalidsuper: !isValid };
    };
    Object.defineProperty(TaxCalculatorComponent.prototype, "superHint", {
        get: function () {
            return _models_query_model__WEBPACK_IMPORTED_MODULE_3__["superAnnuationHint"];
        },
        enumerable: true,
        configurable: true
    });
    TaxCalculatorComponent.prototype.search = function () {
        if (this.income.valid && this.super.valid) {
            var q = new _models_query_model__WEBPACK_IMPORTED_MODULE_3__["Query"]();
            q.income = this.income.value;
            q.super = this.super.value;
            q.isSuperIncluded = this.isSuperIncluded.value;
            this.store.dispatch(new _actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_5__["CalculateTaxAction"](q));
        }
    };
    TaxCalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tax-calculator',
            template: __webpack_require__(/*! ./tax-calculator.component.html */ "./src/app/components/tax-calculator/tax-calculator.component.html"),
            styles: [__webpack_require__(/*! ./tax-calculator.component.scss */ "./src/app/components/tax-calculator/tax-calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TaxCalculatorComponent);
    return TaxCalculatorComponent;
}());



/***/ }),

/***/ "./src/app/effects/tax-calculator.effect.ts":
/*!**************************************************!*\
  !*** ./src/app/effects/tax-calculator.effect.ts ***!
  \**************************************************/
/*! exports provided: TaxCalculatorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorEffects", function() { return TaxCalculatorEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/tax-calculator.action */ "./src/app/actions/tax-calculator.action.ts");
/* harmony import */ var _services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tax-calculator.service */ "./src/app/services/tax-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaxCalculatorEffects = /** @class */ (function () {
    function TaxCalculatorEffects(actions$, taxCalculatorService) {
        var _this = this;
        this.actions$ = actions$;
        this.taxCalculatorService = taxCalculatorService;
        this.search$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_4__["CALCULATE_TAX"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (query) {
            var result = _this.taxCalculatorService.calculateTax(query);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_4__["CalculateTaxCompleteAction"]({ taxStore: result }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TaxCalculatorEffects.prototype, "search$", void 0);
    TaxCalculatorEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_5__["TaxCalculatorService"]])
    ], TaxCalculatorEffects);
    return TaxCalculatorEffects;
}());



/***/ }),

/***/ "./src/app/models/query.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/query.model.ts ***!
  \***************************************/
/*! exports provided: Query, superAnnuationDefault, superAnnuationHint, messageRequired, messageInvalidIncome, messageInvalidSuper, messageEmpty, required, pattern, invalidsuper, incomeRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superAnnuationDefault", function() { return superAnnuationDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superAnnuationHint", function() { return superAnnuationHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageRequired", function() { return messageRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInvalidIncome", function() { return messageInvalidIncome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageInvalidSuper", function() { return messageInvalidSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageEmpty", function() { return messageEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidsuper", function() { return invalidsuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incomeRegex", function() { return incomeRegex; });
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());

// all these can be moved to resource file in future.
var superAnnuationDefault = '9.5';
var superAnnuationHint = '(>= 9.5%)';
var messageRequired = 'You must enter a value';
var messageInvalidIncome = 'Income must be greater than $0';
var messageInvalidSuper = 'Superannuation must be greater than or equal to 9.5%';
var messageEmpty = '';
var required = 'required';
var pattern = 'pattern';
var invalidsuper = 'invalidsuper';
var incomeRegex = '^[1-9][0-9]*$';


/***/ }),

/***/ "./src/app/models/result.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/result.model.ts ***!
  \****************************************/
/*! exports provided: Result, ResultStore, ResultColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultStore", function() { return ResultStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultColumns", function() { return ResultColumns; });
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var ResultStore = /** @class */ (function () {
    function ResultStore() {
    }
    return ResultStore;
}());

var ResultColumns = ['gross', 'super', 'grossSuper', 'tax', 'net', 'netSuper'];


/***/ }),

/***/ "./src/app/models/tax-calculator.datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/tax-calculator.datasource.ts ***!
  \*****************************************************/
/*! exports provided: TaxCalculatorDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorDataSource", function() { return TaxCalculatorDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TaxCalculatorDataSource = /** @class */ (function (_super) {
    __extends(TaxCalculatorDataSource, _super);
    function TaxCalculatorDataSource(taxStore) {
        var _this = _super.call(this) || this;
        _this.taxStore = taxStore;
        return _this;
    }
    /* Connect function called by the table to retrieve one stream containing the data to render. */
    TaxCalculatorDataSource.prototype.connect = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.taxStore);
    };
    TaxCalculatorDataSource.prototype.disconnect = function () { };
    return TaxCalculatorDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/reducers/tax-calculator.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/reducers/tax-calculator.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialState, taxCalculatorReducer, taxStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxCalculatorReducer", function() { return taxCalculatorReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxStore", function() { return taxStore; });
/* harmony import */ var _actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/tax-calculator.action */ "./src/app/actions/tax-calculator.action.ts");

var initialState = {
    taxStore: {
        gross: 0,
        super: 0,
        tax: 0
    }
};
function taxCalculatorReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_tax_calculator_action__WEBPACK_IMPORTED_MODULE_0__["CALCULATE_TAX_COMPLETE"]:
            return action.payload;
        default:
            return state;
    }
}
var taxStore = 'taxStore';


/***/ }),

/***/ "./src/app/services/tax-calculator.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tax-calculator.service.ts ***!
  \****************************************************/
/*! exports provided: TaxCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorService", function() { return TaxCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_result_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/result.model */ "./src/app/models/result.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TaxCalculatorService = /** @class */ (function () {
    function TaxCalculatorService() {
    }
    // the below tax calculation is generally fetched from a service
    // the below calculation code can be replaced by a service call
    // and map the data to payload and dispatch with sucess/failure call
    TaxCalculatorService.prototype.calculateTax = function (query) {
        var result = new _models_result_model__WEBPACK_IMPORTED_MODULE_1__["Result"]();
        var gross = 0;
        var superAnnuation = 0;
        if (query.isSuperIncluded) {
            var i = query.income;
            var s = query.super * (i / 100);
            gross = (i / (i + s)) * i;
            superAnnuation = i - gross;
        }
        else {
            gross = query.income;
            superAnnuation = query.super * (gross / 100);
        }
        var tax = 0;
        if (gross <= 18200) {
            tax = 0;
        }
        else if (gross > 18200 && gross <= 37000) {
            tax = (gross - 18200) * (19 / 100);
        }
        else if (gross > 37000 && gross <= 87000) {
            tax = 3572 + ((gross - 37000) * (32.5 / 100));
        }
        else if (gross > 87000 && gross <= 180000) {
            tax = 19822 + ((gross - 87000) * (37 / 100));
        }
        else if (gross > 180000) {
            tax = 54232 + ((gross - 180000) * (45 / 100));
        }
        result.gross = gross;
        result.super = superAnnuation;
        result.tax = tax;
        return result;
    };
    TaxCalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TaxCalculatorService);
    return TaxCalculatorService;
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

module.exports = __webpack_require__(/*! C:\Users\Shivakanth\Documents\Visual Studio 2017\Projects\FlickrFeeds\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map