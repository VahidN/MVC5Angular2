"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=usernameValidators.js.map