function palidromo(palavra) {
    let palidromado = palavra.split('').reverse().join('');
    if(palidromado === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(palidromo('Rangel'));
