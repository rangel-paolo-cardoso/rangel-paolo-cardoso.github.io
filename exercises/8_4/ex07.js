const assert = require('assert');

const greaterThanTen = (array) => array.filter((num) => num > 10);
  // let results = [];
  // for (let i = 0; i < array.length; i += 1) {
  //   if (array[i] > 10) {
  //     results.push(array[i]);
  //   }
  // }
  // return results;

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const output = greaterThanTen(parameter);

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(output, result);
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
