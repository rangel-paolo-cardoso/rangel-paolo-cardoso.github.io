const assert = require('assert');

function change(param) {
  return !param;
}

assert.ok(() => {change(true)}, false);
assert.ok(() => {change(false)}, true);
