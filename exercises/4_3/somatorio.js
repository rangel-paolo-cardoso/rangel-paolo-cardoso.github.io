const somatorio = (numero) => {
  let txt = '';
  let soma = 0;
  for (let i = 1; i <= numero; i += 1) {
    soma += i;
    txt += (i === numero) ? `${i}=${soma}` : `${i}+`;
  }
  return txt;
};

console.log(somatorio(5));
