function maiorValor(vetor) {
    let posicaoMaior = vetor[0];
    for(valor in vetor) {
        if(vetor[valor] > posicaoMaior)
        posicaoMaior = valor;
    }
    return posicaoMaior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));