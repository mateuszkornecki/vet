
var assert = require('../utils/assert');

/**
* Checks to see if a value is an array
* @name isArray
* @param val - the value to check
* @returns true if the value is an array
* @memberof vet.arrays
* @example
* ```javascript
* let isArray = require('vet/arrays/isArray');
*
* isArray(null); // returns false
* isArray({}); // returns false
*
* isArray([]); // returns true
* ```
*/
var isArray =
	Array.isArray ||
	function isArray(val) {
		return Object.prototype.toString.call(val) === '[object Array]';
	};

isArray.assert = assert(isArray, 'vet/isArray assert failed');

module.exports = isArray;
