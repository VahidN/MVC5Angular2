import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
    //template: require('./product-detail.component.html')//for webpack
})
export class ProductDetailComponent implements OnInit, OnDestroy {

    private sub: any;

    pageTitle: string = 'Product Detail';

    constructor(private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit(): void {
        this.sub = this._route.params
            .subscribe(params => {
                let id = +params['id']; // (+) converts string 'id' to a number
                this.pageTitle += `: ${id}`;
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe(); // we must unsubscribe before Angular destroys the component. Failure to do so could create a memory leak.
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}