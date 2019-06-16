/* eslint-env mocha */

const inspect = require('object-inspect');

const Vet = require('../');
const { isArrayOf } = Vet.Array;

const TESTS = [
	{ input: [ 'a string' ], expected: true },
	{ input: [ '' ], expected: true },
	{ input: [ true ], expected: true },
	{ input: [ false ], expected: true },
	{ input: [ (() => {}) ], expected: true },
	{ input: [ {} ], expected: true },
	{ input: [ /a/ ], expected: true },
	{ input: [ 1, 2, 3 ], expected: true },
	{ input: [], expected: true },

	{ input: [ 1, 2, null ], expected: false },
	{ input: [ undefined ], expected: false },
	{ input: [ null ], expected: false },
	{ input: 'a string', expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: /a/, expected: false },
];

describe('vet/arrays/isArrayOf', () => {

	const validator = isArrayOf((val) => val != null);

	TESTS.forEach((test) => {
		it(
			`(${inspect(test.input)})-->(${inspect(test.expected)})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});

	TESTS.forEach((test) => {
		it(
			`assert (${inspect(test.input)})-->(${inspect(test.expected)})`,
			(done) => {
				let output;

				try {
					validator.assert(test.input);
					output = true;
				} catch (err) {
					output = false;
				}

				done(
					output === test.expected ? null : new Error()
				);
			}
		);
	});


});
