
var assert = require('./utils/assert');

/**
* A function to check for undefined
* @param val - a value to check
* @returns true if val is strictly not undefined
* @memberof vet
* @example
* ```javascript
* let isNotUndefined = require('vet/isNotUndefined');
*
* isNotUndefined(undefined); // returns false
*
* isNotUndefined(null); // returns true
* isNotUndefined({}); // returns true
* ```
*/
function isNotUndefined(val) {
	return val !== undefined;
}

isNotUndefined.assert = assert(isNotUndefined, 'vet/isNotUndefined assert failed');

module.exports = isNotUndefined;
