"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require("./products/product-list.component");
var welcome_component_1 = require("./home/welcome.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_form_component_1 = require("./products/product-form.component");
var signup_form_component_1 = require("./users/signup-form.component");
var typed_sha_component_1 = require("./using-third-party-libraries/typed-sha.component");
var untyped_sha_component_1 = require("./using-third-party-libraries/untyped-sha.component");
var using_jquery_addons_component_1 = require("./using-jquery-addons/using-jquery-addons.component");
exports.routes = [
    { path: "", component: welcome_component_1.WelcomeComponent, terminal: true },
    { path: "welcome", component: welcome_component_1.WelcomeComponent },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "product/:id", component: product_detail_component_1.ProductDetailComponent },
    { path: "addproduct", component: product_form_component_1.ProductFormComponent },
    { path: "adduser", component: signup_form_component_1.SignupFormComponent },
    { path: "typedsha", component: typed_sha_component_1.TypedShaComponent },
    { path: "untypedsha", component: untyped_sha_component_1.UnTypedShaComponent },
    { path: "usingjquery", component: using_jquery_addons_component_1.UsingJQueryAddonsComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map