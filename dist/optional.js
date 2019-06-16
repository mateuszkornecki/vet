
var assert = require('./utils/assert');

/**
* A function builder to optionally check a value
* @param validator - a validator function
* @returns a function that takes in a value, and returns true if the value does not exist, or the validator returns true
* @memberof vet
* @example
* ```javascript
* let optional = require('vet/optional');
* let isNumber = require('vet/numbers/isNumber');
*
* let isMaybeNumber = optional(isNumber);
*
* isMaybeNumber(null); // returns false
* isMaybeNumber("1"); // returns false
*
* isMaybeNumber(1); // returns true
* isMaybeNumber(undefined); // returns true
* ```
*/
function optional(validator) {
	var instance = function _optionalInstance(val) {
		return val == null || validator(val);
	};

	instance.assert = assert(instance, 'vet/optional assert failed');

	return instance;
}

module.exports = optional;
