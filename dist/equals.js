
var assert = require('./utils/assert');

/**
* Builds an curried equal function
* @param eq - value to check equality against
* @returns a function that takes in one parameter val, and returns true if val === eq
* @memberof vet
* @example
* ```javascript
* let equals = require('vet/equals');
*
* let is3 = equals(3);
*
* is3(null); // returns false
* is3({}); // returns false
*
* is3(3); // returns true
* ```
*/
function equals(eq) {
	var instance = function _equalsInstance(val) { return val === eq; };

	instance.assert = assert(instance, 'vet/equals assert failed');

	return instance;
}

module.exports = equals;
