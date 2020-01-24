
// capitalizeFirst.js
const assert = require('assert');

function capitalizeFirst(input) {
  let output = ''
  for ( i=0; i<input.length; i++){
    if(i === 0){
      output += input[0].toUpperCase()
    }
    else {output += input[i]}
  }
  return output

}
// version optimisées
// function capitalizeFirst(input) {
//   return input.length > 0
//     ? input[0].toUpperCase() + input.slice(1)
//     : '';
// }

    assert.strictEqual(typeof capitalizeFirst, 'function');
    assert.strictEqual(capitalizeFirst.length, 1);
    assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
    assert.strictEqual(capitalizeFirst('z'), 'Z');
    assert.strictEqual(capitalizeFirst(''), '');




module.exports = capitalizeFirst;