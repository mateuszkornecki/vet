/* eslint-env mocha */

const inspect = require('object-inspect');

const isNot = require('./isNot');
const isNumber = require('./numbers/isNumber');

const TESTS = [
	{ input: '', expected: true },
	{ input: 'a string', expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },
	{ input: false, expected: true },
	{ input: true, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: () => {}, expected: true },
	{ input: /a/, expected: true },

	{ input: 0, expected: false },
	{ input: 1, expected: false },
	{ input: Number.NaN, expected: false },
	{ input: Number.EPSILON, expected: false },
	{ input: Number.MAX_SAFE_INTEGER, expected: false },
	{ input: Number.MIN_SAFE_INTEGER, expected: false },
	{ input: Number.MAX_VALUE, expected: false },
	{ input: Number.MIN_VALUE, expected: false },
	{ input: Number.NEGATIVE_INFINITY, expected: false },
	{ input: Number.POSITIVE_INFINITY, expected: false },
];


describe('vet/isNot', () => {

	const validator = isNot(isNumber);

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
