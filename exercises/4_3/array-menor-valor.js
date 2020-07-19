const menorValor = (vetor) => vetor.reduce((res, next) => Math.min(res, next));

console.log(menorValor([2, 3, 6, 7, 10, 1]));
