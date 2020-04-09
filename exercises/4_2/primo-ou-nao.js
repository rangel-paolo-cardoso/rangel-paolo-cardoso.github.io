let numero = 922;
let cont = 0;
let avaliador = false;

for(let i = 1 ; i < numero ; i++) {
    if(numero % 1 == 0 && numero % i == 0) {
        cont++;
    }
    if(cont > 2) {
        break;
    }
}

if(cont < 2) {
    avaliador = true;
    console.log(numero + ' é um número primo.');
} else {
    console.log(numero + ' não é um número primo.');
}
