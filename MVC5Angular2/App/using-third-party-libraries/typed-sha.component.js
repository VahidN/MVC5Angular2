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
//import { jsSHA } from "jssha";
var jsSHA = require("jssha"); // ===> var jsSHA = require("jssha"); // ===> loads `sha512.js` file dynamically using `systemjs.config.js` file definitions
var TypedShaComponent = (function () {
    function TypedShaComponent() {
    }
    TypedShaComponent.prototype.ngOnInit = function () {
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update("This is a test");
        this.hash = shaObj.getHash("HEX");
    };
    TypedShaComponent = __decorate([
        // ===> var jsSHA = require("jssha"); // ===> loads `sha512.js` file dynamically using `systemjs.config.js` file definitions
        core_1.Component({
            templateUrl: 'app/using-third-party-libraries/typed-sha.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TypedShaComponent);
    return TypedShaComponent;
}());
exports.TypedShaComponent = TypedShaComponent;
//# sourceMappingURL=typed-sha.component.js.map