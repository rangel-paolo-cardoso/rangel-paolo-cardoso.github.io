const fraseLeng = (frase) => {
  const arr = frase.split(' ');
  let word = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
      if (word.length < arr[i].length) {
          word = arr[i];
      }
  }
  return word;
};

let texto = 'Antônio foi no banheiro e não sabemos o que aconteceu';
console.log(fraseLeng(texto));