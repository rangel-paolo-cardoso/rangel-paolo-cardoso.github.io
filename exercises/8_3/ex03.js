const assert = require('assert');

const mySum = (arr) => arr.reduce((res, nxt) => res + nxt, 0);

assert.equal(mySum([1, 2, 3, 4]), 10);
assert.equal(mySum([1, -2, -3, 4]), 0);
