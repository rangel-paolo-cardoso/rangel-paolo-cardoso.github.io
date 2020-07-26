const assert = require('assert');

const change = (param) => !param;

assert.ok(() => change(true), false);
assert.ok(() => change(false), true);
