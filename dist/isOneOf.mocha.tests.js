/* eslint-env mocha */

const inspect = require('object-inspect');

const isOneOf = require('./isOneOf');

const TESTS = [
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/isOneOf', () => {

	const validator = isOneOf(true, '');

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

	const validator2 = isOneOf((val) => val === true, (val) => val === '');

	TESTS.forEach((test) => {
		it(
			`(${inspect(test.input)})-->(${inspect(test.expected)})`,
			(done) => done(
				validator2(test.input) === test.expected ? null : new Error()
			)
		);
	});

	TESTS.forEach((test) => {
		it(
			`assert (${inspect(test.input)})-->(${inspect(test.expected)})`,
			(done) => {
				let output;

				try {
					validator2.assert(test.input);
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
