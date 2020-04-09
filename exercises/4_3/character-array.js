function avaliaArray(listaNomes) {
    let lengthFirst = listaNomes[0].length;
    let name = '';
    for(nome in listaNomes) {
        if(listaNomes[nome].length > lengthFirst) {
            lengthFirst = listaNomes[nome].length;
            name = listaNomes[nome];
        }
    }
    return name;
}

console.log(avaliaArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))