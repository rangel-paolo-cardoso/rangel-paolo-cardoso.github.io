const assert = require("assert");

const greet = (name, grt = 'Hi') => `${grt} ${name}`;

assert.equal(greet("John"), "Hi John");
assert.equal(greet("John", "Good morning"), "Good morning John");
assert.equal(greet("Isabela", "Oi"), "Oi Isabela");
