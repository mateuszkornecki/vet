/* eslint-env mocha */

const inspect = require('object-inspect');

const isTruthy = require('./isTruthy');

const TESTS = [
	{ input: true, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: /a/, expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },

	{ input: false, expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/booleans/isTruthy', () => {

	const validator = isTruthy;

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
