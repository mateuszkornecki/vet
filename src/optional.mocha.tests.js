/* eslint-env mocha */

const inspect = require('object-inspect');

const optional = require('./optional');

const TESTS = [
	{ input: 'a string', expected: true },
	{ input: '', expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },

	{ input: true, expected: false },
	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('vet/optional', () => {

	const validator = optional((val) => typeof val === 'string' || val instanceof String);

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
