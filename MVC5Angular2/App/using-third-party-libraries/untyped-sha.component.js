"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jsSHA = require("jssha"); // ==> loads `sha512.js` file dynamically using `systemjs.config.js` file definitions
//declare var jsSHA: any; // ==> this requires adding <script src="node_modules/jssha/src/sha512.js"></script> to the first page manually.
var UnTypedShaComponent = (function () {
    function UnTypedShaComponent() {
    }
    UnTypedShaComponent.prototype.ngOnInit = function () {
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update("This is a test");
        this.hash = shaObj.getHash("HEX");
    };
    return UnTypedShaComponent;
}());
UnTypedShaComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/using-third-party-libraries/untyped-sha.component.html'
    })
], UnTypedShaComponent);
exports.UnTypedShaComponent = UnTypedShaComponent;
//# sourceMappingURL=untyped-sha.component.js.map