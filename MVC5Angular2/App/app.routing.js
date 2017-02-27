"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var product_list_component_1 = require("./products/product-list.component");
var welcome_component_1 = require("./home/welcome.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_form_component_1 = require("./products/product-form.component");
var signup_form_component_1 = require("./users/signup-form.component");
var typed_sha_component_1 = require("./using-third-party-libraries/typed-sha.component");
var untyped_sha_component_1 = require("./using-third-party-libraries/untyped-sha.component");
var using_jquery_addons_component_1 = require("./using-jquery-addons/using-jquery-addons.component");
var appRoutes = [
    { path: "", component: welcome_component_1.WelcomeComponent },
    { path: "welcome", component: welcome_component_1.WelcomeComponent },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "product/:id", component: product_detail_component_1.ProductDetailComponent },
    { path: "addproduct", component: product_form_component_1.ProductFormComponent },
    { path: "adduser", component: signup_form_component_1.SignupFormComponent },
    { path: "typedsha", component: typed_sha_component_1.TypedShaComponent },
    { path: "untypedsha", component: untyped_sha_component_1.UnTypedShaComponent },
    { path: "usingjquery", component: using_jquery_addons_component_1.UsingJQueryAddonsComponent }
];
exports.routingComponents = [
    product_list_component_1.ProductListComponent,
    welcome_component_1.WelcomeComponent,
    product_detail_component_1.ProductDetailComponent,
    product_form_component_1.ProductFormComponent,
    signup_form_component_1.SignupFormComponent,
    typed_sha_component_1.TypedShaComponent,
    untyped_sha_component_1.UnTypedShaComponent,
    using_jquery_addons_component_1.UsingJQueryAddonsComponent
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map