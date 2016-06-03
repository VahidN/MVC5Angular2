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
var http_1 = require('@angular/http');
require('rxjs/Rx'); // require('rxjs/Rx'); // Load all features
//import 'jssha'; // require('jssha');
var router_deprecated_1 = require('@angular/router-deprecated');
var product_list_component_1 = require('./products/product-list.component');
var product_service_1 = require('./products/product.service');
var welcome_component_1 = require('./home/welcome.component');
var product_detail_component_1 = require('./products/product-detail.component');
var product_form_component_1 = require('./products/product-form.component');
var signup_form_component_1 = require('./users/signup-form.component');
var typed_sha_component_1 = require('./using-third-party-libraries/typed-sha.component');
var untyped_sha_component_1 = require('./using-third-party-libraries/untyped-sha.component');
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
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                product_service_1.ProductService,
                http_1.HTTP_PROVIDERS,
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
            { path: '/products', name: 'Products', component: product_list_component_1.ProductListComponent },
            { path: '/product/:id', name: 'ProductDetail', component: product_detail_component_1.ProductDetailComponent },
            { path: '/addproduct', name: 'AddProduct', component: product_form_component_1.ProductFormComponent },
            { path: '/adduser', name: 'AddUser', component: signup_form_component_1.SignupFormComponent },
            { path: '/typedsha', name: 'TypedSha', component: typed_sha_component_1.TypedShaComponent },
            { path: '/untypedsha', name: 'UnTypedSha', component: untyped_sha_component_1.UnTypedShaComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map