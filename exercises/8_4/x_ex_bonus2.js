const assert = require('assert');

const removeMiddle = (vet) => {
  let arr = [];
  let pos = vet.length / 2 - 0.5;
  arr.push(vet[pos]);
  vet.splice(pos, 1);
  return arr;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
