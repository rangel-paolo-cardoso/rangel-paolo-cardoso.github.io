const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let count = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
        count += 1;
      results += count;
    } else {
      results += characters[i];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);

assert.strictEqual(typeof removeVowels, 'function');
assert.deepStrictEqual(output, result);
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
