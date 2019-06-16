/* eslint-env mocha */

const inspect = require('object-inspect');

const isNotNull = require('./isNotNull');

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: undefined, expected: true },
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: null, expected: false },
];


describe('vet/isNotNull', () => {

	const validator = isNotNull;

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
