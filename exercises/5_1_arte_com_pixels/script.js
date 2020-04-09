const paleta = document.querySelectorAll('.color'); // Manipula as cores da paleta.
const btnLimpar = document.getElementById('clear-board'); // Manipula botão de limpar.
const btnGerar = document.getElementById('generate-board'); // Manipula botão de gerar quadro.
const quadro = document.getElementById('pixel-board'); // Manipula o quadro.
let pixel = document.querySelectorAll('.pixel'); // Manipula os pixels.
const opcaoUsuario = document.getElementById('board-size');
let selectedColor = 'black'; // Cor selecionada. Por padrão preto.

function carregaCores() { // Define as cores da paleta.
  for (let number = 0; number < paleta.length; number += 1) {
    switch (number) {
      case 0:
        paleta[number].style.backgroundColor = 'black';
        break;
      case 1:
        paleta[number].style.backgroundColor = 'red';
        break;
      case 2:
        paleta[number].style.backgroundColor = 'blue';
        break;
      case 3:
        paleta[number].style.backgroundColor = 'green';
        break;
      default:
        paleta[number].style.backgroundColor = '';
    }
  }
}

function carregaCoresAleatorio() { // Carrega cores aleatoriamente.
  let red;
  let green;
  let blue;
  for (let number = 1; number < paleta.length; number += 1) {
    red = Number.parseInt(Math.random() * 255, 10);
    green = Number.parseInt(Math.random() * 255, 10);
    blue = Number.parseInt(Math.random() * 255, 10);
    paleta[number].style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
}

function configuraPixels() { // Cor de fundo dos pixels do painel é branca.
  for (let p = 0; p < pixel.length; p += 1) { // For que percorre todos os div .pixel.
    pixel[p].style.backgroundColor = 'white'; // Configura cor de fundo para branco.
  }
}

function removeSelected() {
  document.querySelector('.selected').classList.remove('selected');
}

function adcionaEventPaleta() { // Adiciona evento click em cada cor da paleta.
  const config = function () {
    selectedColor = event.target.style.backgroundColor;
    removeSelected();
    event.target.classList.add('selected');
  };
  for (let p = 0; p < paleta.length; p += 1) { // For que percorre todos os div .pixel.
    paleta[p].addEventListener('click', config);
  }
}

function adicionaEventPixel() {
  const config = function () {
    event.target.style.backgroundColor = selectedColor;
  };
  for (let p = 0; p < pixel.length; p += 1) {
    pixel[p].addEventListener('click', config);
  }
}

function eventoLimpador() {
  btnLimpar.addEventListener('click', function () {
    for (let p = 0; p < pixel.length; p += 1) {
      pixel[p].style.backgroundColor = 'white';
    }
  });
}

function mudaTamanhoQuadro(l, a) {
  quadro.style.height = `${a}px`;
  quadro.style.width = `${l}px`;
}

function apagaPixels() { // Função chamada para apagar os pixels.
  for (let p = 0; p < pixel.length; p += 1) {
    quadro.removeChild(pixel[p]);
  }
}

function gerarPixels(numero) { // Gera novos pixels
  for (let n = 0; n < numero; n += 1) {
    const pix = document.createElement('div');
    pix.className = 'pixel';
    pix.style.backgroundColor = 'white';
    quadro.appendChild(pix);
  }
}

function verificaEntrada(entrada) { // Verifica entrado do usuário.
  if (entrada < 5) {
    entrada = 5;
  } else if (entrada > 50) {
    entrada = 50;
  }
  return entrada;
}

function calculaPixels(numero) { // Calcula número de pixels.
  return numero * numero;
}

function eventoGerador() { // Primeiro apaga os pixels.
  btnGerar.addEventListener('click', function () {
    const usuarioNumber = verificaEntrada(Number(opcaoUsuario.value));
    const numeroPixels = calculaPixels(usuarioNumber);
    const largura = (usuarioNumber * 40) + (usuarioNumber * 2);
    const altura = largura;
    mudaTamanhoQuadro(largura, altura);
    apagaPixels();// Apaga os pixels.
    gerarPixels(numeroPixels);
    pixel = document.querySelectorAll('.pixel');
    adicionaEventPixel();
  });
}

window.onload = function () {
  carregaCores();
  configuraPixels();
  adcionaEventPaleta();
  adicionaEventPixel();
  eventoLimpador();
  eventoGerador();
  carregaCoresAleatorio();
};
