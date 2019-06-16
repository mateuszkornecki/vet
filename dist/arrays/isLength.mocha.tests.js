/* eslint-env mocha */

const inspect = require('object-inspect');

const isLength = require('./isLength');

const TESTS = [
	{ input: [ 1, 'a string' ], expected: true },
	{ input: [ 1, null ], expected: true },
	{ input: [ 1, undefined ], expected: true },

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


describe('vet/arrays/isLength', () => {

	const validator = isLength(2);

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
