
var assert = require('./utils/assert');

function isFunction(val) { return typeof val === 'function'; }

/**
* Constructs a function that checks equality against any number of arguments
* @param {...*} eq - values to check equality against
* @returns a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq
* @memberof vet
* @example
* ```javascript
* let isAllOf = require('vet/isAllOf');
* let isNumber = require('vet/numbers/isNumber');
* let isPositive = require('vet/numbers/isPositive');
*
* let check = isAllOf(isNumber, isPositive);
*
* check(-1); // returns false
*
* check(1); // returns true
* ```
*/
function isAllOf () {
	var validators = arguments;

	var instance = function _isAllOfInstance(val) {
		for (var i = 0; i < validators.length; i++) {
			var validator = validators[i];
			var check = typeof validator === 'function' ?
				validator(val) :
				(val === validator);

			if (!check) { return false; }
		}

		return true;
	};

	instance.assert = assert(instance, 'vet/isAllOf assert failed');

	return instance;
}

module.exports = isAllOf;
