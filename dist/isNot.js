
var assert = require('./utils/assert');

/**
* a function that inverts the result of a validator
* @param {function} validator - validator to invert
* @returns a wrapper function that inverts the result of a validator
* @memberof vet
* @example
* ```javascript
* let isNot = require('vet/isNot');
* let isNumber = require('vet/numbers/isNumber');
*
* let check = isNot(isNumber);
*
* check(1); // returns false
*
* check(null); // returns true
* ```
*/
function isNot(validator) {

	var instance = function _isNotInstance(val) {
		return !validator(val);
	};

	instance.assert = assert(instance, 'vet/isNot assert failed');

	return instance;
}

module.exports = isNot;
