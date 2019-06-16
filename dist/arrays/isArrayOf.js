
var isArray = require('./isArray');
var assert = require('../utils/assert');

/**
* Builds an array validator that checks the children of the array
* @param val - the validator function run against the array children
* @returns a function that returns true if the value is an array, and all of the children pass the validator
* @memberof vet.arrays
* @example
* ```javascript
* let isString = require('vet/strings/isString');
* let isArrayOf = require('vet/arrays/isArrayOf');
*
* let isStringArray = isArrayOf(isString);
*
* isStringArray(null); // returns false
* isStringArray({}); // returns false
* isStringArray([ 1, 2, 3 ]); // returns false
*
* isStringArray([]); // returns true
* isStringArray([ '1', '2', '3' ]); // returns true
* ```
*/
function isArrayOf(validator) {
	var _validatorAssert =
		validator.assert ||
		assert(validator);

	var instance = function _isArrayOfInstance(arr) {
		if (!isArray(arr)) { return false; }

		for (var i = 0; i < arr.length; i++) {
			if (!validator(arr[i])) { return false; }
		}

		return true;
	};

	instance.assert = function (arr) {
		isArray.assert(arr);

		for (var i = 0; i < arr.length; i++) {
			_validatorAssert(arr[i]);
		}
	};

	return instance;
}

module.exports = isArrayOf;
