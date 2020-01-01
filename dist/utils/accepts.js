"use strict";
function messageBuilder(log) {
    return typeof log === 'function' ?
        log :
        function () { return log; };
}
/**
* Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.
*
* @param func - the function to wrap
* @param validator - the validator function.  This gets passed the arguments as an array
* @param message - an optional message string to pass into the error thrown
* @returns a wrapped function that throws an error if the arguments do not pass validation
* @memberof vet.utils
*/
function accepts(func, validator, message) {
    message = messageBuilder(message || 'vet/utils/accepts error!');
    return function wrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _args = arguments;
        if (validator.apply(this, _args)) {
            return func.apply(this, _args);
        }
        else {
            throw new Error(message.apply(this, _args));
        }
    };
}
module.exports = accepts;
