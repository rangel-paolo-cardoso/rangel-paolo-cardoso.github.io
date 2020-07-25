const assert = require('assert');

const myIndexOf = (arr, item) => {
  let searchedIndex = -1;
  arr.forEach((element, idx) => {
    if (item === element) searchedIndex = idx;
  });
  return searchedIndex;
};

assert.equal(myIndexOf([1, 2, 3, 4], 3), 2);
assert.equal(myIndexOf([1, 2, 3, 4], 5), -1);
