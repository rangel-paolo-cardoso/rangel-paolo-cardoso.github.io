const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
      if (array[i] > largestNumber) {
          largestNumber = array[i];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const output = getLargestNumber(parameter);

assert.deepEqual(output, result);
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/
