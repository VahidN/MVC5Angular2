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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var http_2 = require("@angular/http");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._checkUserUrl = '/home/checkUser';
        this._addUserUrl = '/home/addUser';
    }
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService.prototype.isUserNameUnique = function (user) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // for ASP.NET MVC
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this._checkUserUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("User: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // for ASP.NET MVC
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this._addUserUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("User: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map