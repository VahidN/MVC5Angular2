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
var router_deprecated_1 = require('@angular/router-deprecated');
var product_service_1 = require('./product.service');
var ProductFormComponent = (function () {
    function ProductFormComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.productModel = {}; // creates an empty object of an interface
    }
    ProductFormComponent.prototype.log = function (productName) {
        console.log(productName);
    };
    ProductFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        console.log(this.productModel);
        this._productService.addProduct(this.productModel)
            .subscribe(function (product) {
            console.log("ID: " + product.productId);
            _this._router.navigate(['Products']);
        });
    };
    ProductFormComponent = __decorate([
        core_1.Component({
            //selector: 'product-form',
            templateUrl: 'app/products/product-form.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_deprecated_1.Router])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=product-form.component.js.map