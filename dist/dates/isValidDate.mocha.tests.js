"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isValidDate_1 = __importDefault(require("./isValidDate"));
var TESTS = [
    { input: new Date(), expected: true },
    { input: new Date(NaN), expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
    { input: (function () { }), expected: false },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
];
describe('vet/dates/isValidDate', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isValidDate_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
