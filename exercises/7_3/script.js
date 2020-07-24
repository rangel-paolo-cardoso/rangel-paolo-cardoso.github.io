const grid = document.getElementById('grid');
const efeitos = [
  'grow',
  'rotateLeft',
  'rotateRight',
  'rotateX',
  'rotateY',
  'translateIt',
  'rotate3D',
]; // Vetor de efeitos.
const cartas = [
  'cartas/cinco-de-ouros.png',
  'cartas/nove-de-espadas.png',
  'cartas/quatro-de-paus.png',
  'cartas/sete-de-espadas.png',
  'cartas/sete-de-paus.png',
  'cartas/tres-de-ouros.png',
]; // Vetor de endereços de cartas.

// Posição da carta.
const posCarta = () => Math.floor(Math.random() * cartas.length);

// Posição do efeito.
const posEfeito = () => Math.floor(Math.random() * efeitos.length);

// Número de 0 a 10.
const numbGerardor = () => Math.ceil(Math.random() * 3);

const pegaCarta = () => {
  // Insere cartas no grid.
  const img = document.createElement('img');
  img.src = cartas[posCarta()];
  img.className = efeitos[posEfeito()];
  img.style.transition = `all ${numbGerardor()}s`;
  grid.appendChild(img);
};
