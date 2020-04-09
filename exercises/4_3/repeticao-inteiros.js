function repeticaoInteiros(listaNumeros) {
    let repetido = 0;
    let contagem = 0;
    let avaliador = listaNumeros[0]
    for(let i = 0; i < listaNumeros.length ; i++) {
        let cont = 0;
        for(let j = 0 ; j < listaNumeros.length ; j++) {
            if(listaNumeros[j] === listaNumeros[i]) {
                cont++;
            }
            if(cont > contagem) {
                contagem = cont;
                repetido = listaNumeros[j];
            }
        }
    }
    return repetido;
}

console.log(repeticaoInteiros([2, 3, 2, 5, 8, 2, 3]));