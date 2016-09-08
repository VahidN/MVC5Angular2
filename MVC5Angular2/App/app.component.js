"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/Rx'); // require('rxjs/Rx'); // Load all features
//import 'jssha'; // require('jssha');
var product_service_1 = require('./products/product.service');
//for webpack
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "DNT AngularJS 2.0 APP";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            //template: require('./app.component.html'), //for webpack
            templateUrl: "/app/app.component.html",
            providers: [
                product_service_1.ProductService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map