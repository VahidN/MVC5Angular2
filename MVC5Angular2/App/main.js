/// <reference path="../typings/browser/ambient/core-js/index.d.ts" />
/// <reference path="../typings/browser/ambient/node/index.d.ts" />
/// <reference path="../typings/browser/ambient/jssha/index.d.ts" />
/// <reference path="../typings/browser/ambient/jquery/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
// Our main component
var app_component_1 = require("./app.component");
var app_routes_1 = require('./app.routes');
//if (process.env.ENV === "production") {
//    enableProdMode();
//}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map