const assert = require('assert');

const myFizzBuzz = (num) =>
  typeof num !== 'number'
    ? false
    : num % 3 === 0 && num % 5 === 0
    ? 'fizzbuzz'
    : num % 3 === 0
    ? 'fizz'
    : num % 5 === 0
    ? 'buzz'
    : num;

// if (typeof num !== 'number') return false;
// if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
// if (num % 3 === 0) return 'fizz';
// if (num % 5 === 0) return 'buzz';
// return num;

assert.equal(myFizzBuzz(15), 'fizzbuzz');
assert.equal(myFizzBuzz(9), 'fizz');
assert.equal(myFizzBuzz(10), 'buzz');
assert.equal(myFizzBuzz(11), 11);
assert.equal(myFizzBuzz('test'), false);
