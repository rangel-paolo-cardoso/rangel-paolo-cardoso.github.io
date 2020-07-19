const maiorValor = (vetor) => vetor.reduce((res, next) => Math.max(res, next));

console.log(maiorValor([2, 23, 6, 7, 10, 1]));
