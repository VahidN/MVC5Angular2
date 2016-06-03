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
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_routeParams, _router) {
        this._routeParams = _routeParams;
        this._router = _router;
        this.pageTitle = 'Product Detail';
        var id = +this._routeParams.get('id');
        this.pageTitle += ": " + id;
    }
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['Products']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map