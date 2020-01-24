// test/capitalizeFirst.test.js
const assert = require('assert');
let capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function ', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
  });
  it('function accept one argument', () => {
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it('function transform javascript correctly with firt letter in capitalize', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  });
  it('function transform javascript is cool in Javascript Is Cool', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript is cool'), 'JavaScript Is Cool');
  });
  it('function works for a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });
  it('function works for an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });

});



