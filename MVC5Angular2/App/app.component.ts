import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // require('rxjs/Rx'); // Load all features
//import 'jssha'; // require('jssha');

import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFormComponent }  from './products/product-form.component';
import { SignupFormComponent } from './users/signup-form.component';
import { TypedShaComponent } from './using-third-party-libraries/typed-sha.component';
import { UnTypedShaComponent } from './using-third-party-libraries/untyped-sha.component';


//for webpack
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


@Component({
    selector: 'pm-app',
    //template: require('./app.component.html'), //for webpack
    templateUrl: "/app/app.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ProductService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
    { path: '/addproduct', name: 'AddProduct', component: ProductFormComponent },
    { path: '/adduser', name: 'AddUser', component: SignupFormComponent },
    { path: '/typedsha', name: 'TypedSha', component: TypedShaComponent },
    { path: '/untypedsha', name: 'UnTypedSha', component: UnTypedShaComponent }
])
export class AppComponent {
    pageTitle: string = "DNT AngularJS 2.0 APP";
}