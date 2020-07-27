const assert = require('assert');

const addAllnumbers = (vet) => vet.reduce((res, nxt) => res + nxt);
  // let sum = 0;
  // for (let i in vet) {
  //   sum += vet[i];
  // }
  // return sum;

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
