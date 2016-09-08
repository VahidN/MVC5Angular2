import { Component } from '@angular/core';
import 'rxjs/Rx'; // require('rxjs/Rx'); // Load all features
//import 'jssha'; // require('jssha');

import { ProductService } from './products/product.service';

//for webpack
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


@Component({
    selector: 'pm-app',
    //template: require('./app.component.html'), //for webpack
    templateUrl: "/app/app.component.html",
    providers: [
        ProductService
    ]
})
export class AppComponent {
    pageTitle: string = "DNT AngularJS 2.0 APP";
}