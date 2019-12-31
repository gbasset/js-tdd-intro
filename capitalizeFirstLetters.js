// capitalizeFirstLetters

const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
    let array1 = input.split(' ');
    let newarray1 = [];    
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms 'javaScript' correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
// Check that capitalizeFirstLetters transforms 'javaScript is cool' correctly
assert.strictEqual(capitalizeFirstLetters('javaScript is cool'), 'JavaScript Is Cool');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

