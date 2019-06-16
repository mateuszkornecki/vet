/* eslint-env mocha */

const inspect = require('object-inspect');

const isNull = require('./isNull');

const TESTS = [
	{ input: null, expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: true, expected: false },
	{ input: '', expected: false },
	{ input: undefined, expected: false },
];


describe('vet/isNull', () => {

	const validator = isNull;

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
