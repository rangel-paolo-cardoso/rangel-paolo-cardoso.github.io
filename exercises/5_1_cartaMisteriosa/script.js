const cartaTexto = document.getElementById('carta-texto'); // Manipula a caixa de texto.
const btnCriarCarta = document.getElementById('criar-carta'); // Manipula botão gerar carta.
const cartaGerada = document.getElementById('carta-gerada'); // Manipula cartas geradas.
const contador = document.getElementById('carta-contador'); // Manipula o contador.
const estilos = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
]; // Matriz de estilos.

const adicionaClass = (elemento) => {
  elemento.classList = '';
  for (let i = 0; i < 3; i += 1) {
    const grupo = Math.floor(Math.random() * estilos.length);
    const estilo = Math.floor(Math.random() * estilos[grupo].length);
    elemento.classList.add(estilos[grupo][estilo]);
    if (elemento.classList.length === 3) {
      break;
    }
  }
};

const contaPalavras = (vet) => contador.innerHTML = vet.length;

const insereCarta = (vet) => {
  cartaGerada.innerHTML = '';
  for (let i = 0; i < vet.length; i += 1) {
    const carta = document.createElement('span');
    carta.innerHTML = vet[i];
    adicionaClass(carta);
    carta.addEventListener('click', function () {
      adicionaClass(carta);
    });
    cartaGerada.appendChild(carta);
  }
  contaPalavras(vet);
};

const geraCarta = () =>
  (!cartaTexto.value)
  ? alert('Não há texto para gerar cartas.')
  : insereCarta(cartaTexto.value.split(' ')); // Vetor onde cada palavra é um índice.

window.onload = () => btnCriarCarta.addEventListener('click', geraCarta);
