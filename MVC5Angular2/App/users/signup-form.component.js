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
var forms_1 = require("@angular/forms");
var usernameValidators_1 = require("./usernameValidators");
var emailValidators_1 = require("./emailValidators");
var user_service_1 = require("./user.service");
var Rx_1 = require("rxjs/Rx");
var SignupFormComponent = (function () {
    function SignupFormComponent(_userService) {
        var _this = this;
        this._userService = _userService;
        this.nameCtrl = new forms_1.FormControl('', [forms_1.Validators.required, usernameValidators_1.UsernameValidators.cannotContainSpace], [function (control) { return _this.nameShouldBeUnique(control); }]);
        this.emailCtrl = new forms_1.FormControl('', [forms_1.Validators.required, emailValidators_1.EmailValidators.email]);
        this.passwordCtrl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.form = new forms_1.FormGroup({
            name: this.nameCtrl,
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
    }
    SignupFormComponent.prototype.onSubmit = function () {
        console.log(this.form);
        console.log(this.form.value);
        /*this.form.find('name').setErrors({
            invalidData : true
        });*/
        this._userService.addUser(this.form.value)
            .subscribe(function (user) {
            console.log("ID: " + user.id);
        });
    };
    SignupFormComponent.prototype.nameShouldBeUnique = function (control) {
        var _this = this;
        return new Rx_1.Observable(function (obs) {
            control
                .valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(function (term) { return _this._userService.isUserNameUnique({ "name": term }); })
                .subscribe(function (result) {
                if (result.result) {
                    obs.next(null);
                }
                else {
                    obs.next({ 'nameShouldBeUnique': true });
                }
                obs.complete();
            }, function (error) {
                obs.next(null);
                obs.complete();
            });
        });
    };
    SignupFormComponent.prototype.nameShouldBeUniqueNormal = function (control) {
        var _this = this;
        var name = control.value;
        return new Promise(function (resolve) {
            _this._userService.isUserNameUnique({ "name": name }).subscribe(function (result) {
                resolve(result.result ? null : { 'nameShouldBeUnique': true });
            }, function (error) {
                resolve(null);
            });
        });
    };
    return SignupFormComponent;
}());
SignupFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/users/signup-form.component.html',
        //template: require('./signup-form.component.html'),//for webpack
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], SignupFormComponent);
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup-form.component.js.map