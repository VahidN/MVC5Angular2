import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    //selector: 'product-form',
    templateUrl: "app/products/product-form.component.html"
    //template: require('./product-form.component.html')//for webpack
})
export class ProductFormComponent {

    productModel = <IProduct>{}; // creates an empty object of an interface

    constructor(private _productService: ProductService, private _router: Router) { }

    log(productName): void {
        console.log(productName);
    }

    onSubmit(form): void {
        console.log(form);
        console.log(this.productModel);

        this._productService.addProduct(this.productModel)
            .subscribe((product: IProduct) => {
                console.log(`ID: ${product.productId}`);
                this._router.navigate(["/products"]);
            });
    }
}