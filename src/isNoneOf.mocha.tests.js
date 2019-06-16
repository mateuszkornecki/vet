/* eslint-env mocha */

const inspect = require('object-inspect');

const isNoneOf = require('./isNoneOf');

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },

	{ input: true, expected: false },
	{ input: '', expected: false },
];


describe('vet/isNoneOf', () => {

	const validator = isNoneOf(true, '');

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


	const validator2 = isNoneOf((val) => val === true, (val) => val === '');

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
