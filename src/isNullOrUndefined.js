
var assert = require('./utils/assert');

/**
* A function to check for null or undefined
* @param val - a value to check
* @returns true if val is loosely null (strictly null or undefined)
* @memberof vet
* @example
* ```javascript
* let isNullOrUndefined = require('vet/isNullOrUndefined');
*
* isNullOrUndefined({}); // returns false
*
* isNullOrUndefined(undefined); // returns true
* isNullOrUndefined(null); // returns true
* ```
*/
function isNullOrUndefined(val) {
	return val == null;
}

isNullOrUndefined.assert = assert(isNullOrUndefined, 'vet/isNullOrUndefined assert failed');

module.exports = isNullOrUndefined;
