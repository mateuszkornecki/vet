
var assert = require('./utils/assert');

/**
* A function to check for nulls
* @param val - a value to check against null
* @returns true if val is strictly not equal to null
* @memberof vet
* @example
* ```javascript
*
* let isNotNull = require('vet/isNotNull');
*
* isNotNull(null); // returns false
*
* isNotNull(undefined); // returns true
* isNotNull({}); // returns true
*
* ```
*/
function isNotNull(val) {
	return val !== null;
}

isNotNull.assert = assert(isNotNull, 'vet/isNotNull assert failed');

module.exports = isNotNull;
