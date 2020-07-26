const assert = require('assert');

const isAbove = (num1, num2) => num1 > num2;

assert.strictEqual(isAbove(5, 2), true);
assert.strictEqual(isAbove(5, 10), false);
