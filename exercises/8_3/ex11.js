const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.strictEqual(isAbove(5, 2), true);
assert.strictEqual(isAbove(5, 10), false);
