//Objeto de auxílio.
const romanos = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

function numerosRomanos(texto) {
    texto = texto.toUpperCase();
    let numero = 0;
    let vetor = [];
    for(let i = 0; i < texto.length ; i++) {
        for(chave in romanos) {
            if(chave === texto[i]) {
                vetor.push(romanos[chave]);
            }
        }
    }
    
    for(let i = 0; i < vetor.length ; i++) {
        if(vetor[i] < vetor[i + 1]) {
            numero += vetor[i + 1] - vetor[i];
            i++;
        } else {
            numero += vetor[i];
        }
    }
    return numero;
}

console.log(numerosRomanos('ii'));