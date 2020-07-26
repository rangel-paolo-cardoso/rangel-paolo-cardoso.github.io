const assert = require('assert');

const myRemoveWithoutCopy = (arr, item) =>
  (arr = arr.filter((num) => num !== item));
  
  // for (let i = 0, len = arr.length; i < len; i += 1) {
  //   if (arr[i] === item) {
  //     arr.splice(i, 1);
  //     i -= 1;
  //     len -= 1;
  //   }
  // }

  // return arr;

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const myArray = [1, 2, 3, 4];
myRemoveWithoutCopy(myArray, 3);
assert.notEqual(myArray, [1, 2, 3, 4]);
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
// console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3))