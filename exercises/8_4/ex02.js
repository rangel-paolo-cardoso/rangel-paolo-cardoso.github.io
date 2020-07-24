const assert = require('assert');

const wordLengths = (vet) => {
  let lenWords = [];
  for (let i in vet) {
    lenWords.push(vet[i].length);
  }
  return lenWords;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
