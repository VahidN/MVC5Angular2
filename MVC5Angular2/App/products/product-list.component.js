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
var router_1 = require('@angular/router');
var product_filter_pipe_1 = require('./product-filter.pipe');
var star_component_1 = require('../shared/star.component');
var product_service_1 = require('./product.service');
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('In OnInit');
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: 'app/products/product-list.component.html',
            //template: require('./product-list.component.html'),//for webpack
            styleUrls: ['app/products/product-list.component.css'],
            //styles: [require('./product-list.component.css')],//for webpack
            pipes: [product_filter_pipe_1.ProductFilterPipe],
            directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map