const grid = document.getElementById('grid');
const efeitos = [
    'grow',
    'rotateLeft',
    'rotateRight',
    'rotateX',
    'rotateY',
    'translateIt',
    'rotate3D'
]; // Vetor de efeitos.
const cartas = [
    'cartas/cinco-de-ouros.png',
    'cartas/nove-de-espadas.png',
    'cartas/quatro-de-paus.png',
    'cartas/sete-de-espadas.png',
    'cartas/sete-de-paus.png',
    'cartas/tres-de-ouros.png'
]; // Vetor de endereços de cartas.

function posCarta() { // Posição da carta.
    return Math.floor(Math.random() * cartas.length);
}

function posEfeito() { // Posição do efeito.
    return Math.floor(Math.random() * efeitos.length);
}

function numbGerardor() { // Número de 0 a 10.
    return Math.ceil(Math.random() * 3);
}

function pegaCarta() { // Insere cartas no grid.
    const img = document.createElement('img');
    img.src = cartas[posCarta()];
    img.className = efeitos[posEfeito()];
    img.style.transition = `all ${numbGerardor()}s`;
    grid.appendChild(img);
}