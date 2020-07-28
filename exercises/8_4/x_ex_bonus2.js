const assert = require('assert');

const removeMiddle = (vet) => {
  const res = vet[parseInt(vet.length / 2)];
  vet.splice(vet.indexOf(res), 1);
  return [res];
};
  // let arr = [];
  // let pos = vet.length / 2 - 0.5;
  // arr.push(vet[pos]);
  // vet.splice(pos, 1);
  // return arr;
  // let arr = [];
  // let pos = vet.length / 2 - 0.5;
  // arr.push(vet[pos]);
  // vet.splice(pos, 1);
  // return arr;

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
