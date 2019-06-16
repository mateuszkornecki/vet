
var isArray = require('./isArray');
var assert = require('../utils/assert');

/**
* Constructor to build an array length validator
* @param len - the length the array shouldbe
* @returns a function that returns true if the value is an array of length len
* @memberof vet.arrays
* @example
* ```javascript
* let isLength = require('vet/arrays/isLength');
*
* let isLength3 = isLength(3);
*
* isLength3(null); // returns false
* isLength3({}); // returns false
* isLength3([ 1, 2 ]); // returns false
*
* isLength3([ '1', '2', '3' ]); // returns true
* ```
*/
function isLength(len) {
	var instance = function _isLengthInstance(val) {
		return isArray(val) && val.length === len;
	};

	instance.assert = assert(instance, 'vet/arrays/isLength assert failed');

	return instance;
}

module.exports = isLength;
