let numero = 997;
let cont = 0;

for (let i = 2; i <= numero; i += 1) {
  if (numero % 1 == 0 && numero % i == 0) cont++;
  if (cont > 2) break;
}

console.log(cont < 2 ? numero + ' é um número primo.' : numero + ' não é um número primo.');
