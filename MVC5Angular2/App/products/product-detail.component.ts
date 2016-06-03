import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
    //template: require('./product-detail.component.html')//for webpack
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';

    constructor(private _routeParams: RouteParams, private _router: Router) {
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}