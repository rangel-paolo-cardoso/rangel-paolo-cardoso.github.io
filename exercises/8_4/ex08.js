const assert = require('assert');

const secondThirdSmallest = (array) => [array.sort((x, y) => x - y)[1], array[2]];
  // results = [array[1], array[2]];
  // let results = [];
  // array.sort(function (x, y) {
  //     return x - y;
  // });
  // results = [array[1], array[2]];
  // return results;

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const output = secondThirdSmallest(parameter);

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(output, result);
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/
