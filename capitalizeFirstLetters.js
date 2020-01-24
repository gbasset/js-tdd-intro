// capitalizeFirstLetters

const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
    let array1 = input.split(' ');
    console.log('array1', array1);
    
    let newarray1 = [];    
    for(let i = 0; i < array1.length; i++){
        newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
        console.log('newarray1',newarray1);
        
    }
    return newarray1.join(' ');
}
console.log('resultat:',capitalizeFirstLetters( 'je suis une biche italienne'));


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

