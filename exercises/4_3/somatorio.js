function somatorio(numero) {
    let txt = '';
    let soma = 0;
    for(let i = 1; i <= numero ;i++) {
        soma += i;
        if(i === numero) {
            txt += `${i}=${soma}`;
        } else {
            txt += `${i}+`;
        }
    }
    return txt;
}

console.log(somatorio(5));