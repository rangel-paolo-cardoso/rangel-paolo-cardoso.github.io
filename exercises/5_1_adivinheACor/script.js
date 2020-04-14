const adivinhaRGB = document.getElementById('rgb-color'); // Manipula texto que exibe RGB.
const answer = document.getElementById('answer'); // Manipula o texto de resposta.
const reset = document.getElementById('reset-game'); // Manipula botão de reiniciar.
const score = document.getElementById('score'); // Manipula o placar de pontos.
const bolas = document.querySelectorAll('.ball'); // Manipula as bolas de cores.
let pontos = 0;
let status = true;

function geraRGB() { // Gera cor aleatória.
  const red = Number.parseInt(Math.random() * 255, 10);
  const green = Number.parseInt(Math.random() * 255, 10);
  const blue = Number.parseInt(Math.random() * 255, 10);
  const cor = `(${red}, ${green}, ${blue})`;
  return cor;
}

function limpaCores() { // Retira a cor das bolas.
  for (let b = 0; b < bolas.length; b += 1) {
    bolas[b].style.backgroundColor = '';
  }
}

function atribuiCores() { // Atribui uma cor para cada bola.
  const comprimento = bolas.length;
  const corCorreta = Number.parseInt(Math.floor(Math.random() * comprimento), 10);
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

function configuraPlcar() { // Configura placar incrementando pontos.
  if (status) {
    pontos += 3;
    score.innerHTML = pontos;
    mudaStatus();
  }
}

function clickBall() { // Avalia o acerto.
  const cor = event.target.style.backgroundColor;
  if (cor === `rgb${adivinhaRGB.innerText}`) {
    answer.innerText = 'Acertou!';
    configuraPlcar();
  } else {
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
