let nota = 85;

if(nota >= 90 && nota <= 100) {
    console.log('Porcentagem >= 90 -> A');
} else if((nota >= 80) && (nota < 90)) {
    console.log('Porcentagem >= 80 -> B');
} else if((nota >= 70) && (nota < 80)) {
    console.log('Porcentagem >= 70 -> C');
} else if((nota >= 60) && (nota < 70)) {
    console.log('Porcentagem >= 60 -> D');
} else if((nota >= 50) && (nota < 60)) {
    console.log('Porcentagem >= 50 -> E');
} else if((nota < 50) && (nota >= 0)) {
    console.log('Porcentagem < 50 -> F');
} else {
    console.log('Nota inválida');
}