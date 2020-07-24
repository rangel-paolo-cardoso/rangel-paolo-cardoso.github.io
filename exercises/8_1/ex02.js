const fraseLeng = (frase) =>
  frase.split(' ').reduce((res, nxt) => (res = res.length > nxt.length ? res : nxt));

const texto = 'Antônio foi no banheiro e não sabemos o que aconteceu';
console.log(fraseLeng(texto));
