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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params
            .subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.pageTitle += ": " + id;
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); // we must unsubscribe before Angular destroys the component. Failure to do so could create a memory leak.
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html'
        //template: require('./product-detail.component.html')//for webpack
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map