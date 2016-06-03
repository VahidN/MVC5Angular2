"use strict";
var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.email = function (control) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    };
    return EmailValidators;
}());
exports.EmailValidators = EmailValidators;
//# sourceMappingURL=emailValidators.js.map