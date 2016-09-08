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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var product_list_component_1 = require("./products/product-list.component");
var welcome_component_1 = require("./home/welcome.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_form_component_1 = require("./products/product-form.component");
var signup_form_component_1 = require("./users/signup-form.component");
var typed_sha_component_1 = require("./using-third-party-libraries/typed-sha.component");
var untyped_sha_component_1 = require("./using-third-party-libraries/untyped-sha.component");
var using_jquery_addons_component_1 = require("./using-jquery-addons/using-jquery-addons.component");
var product_filter_pipe_1 = require('./products/product-filter.pipe');
var star_component_1 = require('./shared/star.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                // module dependencies
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routes_1.routing
            ],
            declarations: [
                // components and directives
                app_component_1.AppComponent,
                star_component_1.StarComponent,
                //You have to declare the components used in the routes in the NgModule.
                product_list_component_1.ProductListComponent,
                welcome_component_1.WelcomeComponent,
                product_detail_component_1.ProductDetailComponent,
                product_form_component_1.ProductFormComponent,
                signup_form_component_1.SignupFormComponent,
                typed_sha_component_1.TypedShaComponent,
                untyped_sha_component_1.UnTypedShaComponent,
                using_jquery_addons_component_1.UsingJQueryAddonsComponent,
                //Pipes
                product_filter_pipe_1.ProductFilterPipe
            ],
            bootstrap: [
                // root component
                app_component_1.AppComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map