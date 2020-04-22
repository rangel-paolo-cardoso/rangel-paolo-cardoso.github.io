const adivinhaRGB = document.getElementById('rgb-color'); // Manipula texto que exibe RGB.
const answer = document.getElementById('answer'); // Manipula o texto de resposta.
const reset = document.getElementById('reset-game'); // Manipula botão de reiniciar.
const score = document.getElementById('score'); // Manipula o placar de pontos.
const bolas = document.querySelectorAll('.ball'); // Manipula as bolas de cores.
let pontos = 0;
let status = true;

function colorLv() { // Gera um número aleatório entre 0 e 255.
  return Number.parseInt(Math.random() * 255, 10);
}

function geraRGB() { // Gera cor aleatória.
  return `(${colorLv()}, ${colorLv()}, ${colorLv()})`;
}

function limpaCores() { // Retira a cor das bolas.
  for (let b = 0; b < bolas.length; b += 1) {
    bolas[b].style.backgroundColor = '';
  }
}

function atribuiCores() { // Atribui uma cor para cada bola.
  const comprimento = bolas.length;
  const corCorreta = Math.floor(Math.random() * comprimento);
  bolas[corCorreta].style.backgroundColor = `rgb${adivinhaRGB.innerText}`;
  for (let b = 0; b < comprimento; b += 1) {
    if (bolas[b].style.backgroundColor === '') {
      bolas[b].style.backgroundColor = `rgb${geraRGB()}`;
    }
  }
}

function configuraRGB() { // Configura o texto com a cor a ser adivinhada.
  adivinhaRGB.innerText = geraRGB();
}

function mudaStatus() { // Altera o status, limita para 1 acerto por rodada.
  status = false;
}

function alarm() {
  if (pontos > 0) {
    score.classList.remove('pontos-neg');
  } else {
    score.classList.add('pontos-neg');
  }
}

function configuraPlcar(tipo) { // Configura placar incrementando pontos.
  if (status) {
    if (tipo === 1) {
      pontos += 3;
      score.innerHTML = pontos;
      alarm();
      mudaStatus();
    } else {
      pontos -= 2;
      score.innerHTML = pontos;
      alarm();
    }
  }
}

function clickBall() { // Avalia o acerto.
  const cor = event.target.style.backgroundColor;
  if (cor === `rgb${adivinhaRGB.innerText}`) {
    answer.innerText = 'Acertou!';
    configuraPlcar(1);
  } else {
    configuraPlcar(2);
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function eventCores() { // Adicona evento para cada bola.
  for (let i = 0; i < bolas.length; i += 1) {
    bolas[i].addEventListener('click', clickBall);
  }
}

function reiniciaJogo() { // Reinicia o jogo e seus valores padrão.
  limpaCores();
  configuraRGB();
  atribuiCores();
  status = true;
  answer.innerText = 'Escolha uma cor';
}

function eventReset() { // Evento para o botão de reset.
  reset.addEventListener('click', reiniciaJogo);
}

window.onload = function () {
  configuraRGB();
  atribuiCores();
  eventCores();
  eventReset();
};
