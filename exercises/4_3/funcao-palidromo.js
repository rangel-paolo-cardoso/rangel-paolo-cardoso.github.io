const palidromo = (palavra) => palavra.split('').reverse().join('') === palavra;

console.log(`É palidromo? ${palidromo('ala')}`);
