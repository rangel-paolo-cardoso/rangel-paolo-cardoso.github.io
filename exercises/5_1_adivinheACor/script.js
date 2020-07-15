const adivinhaRGB = document.getElementById('rgb-color'); // Manipula texto que exibe RGB.
const answer = document.getElementById('answer'); // Manipula o texto de resposta.
const reset = document.getElementById('reset-game'); // Manipula botão de reiniciar.
const dicas = document.getElementById('dicas'); // Manipula botão de dicas.
const score = document.getElementById('score'); // Manipula o placar de pontos.
const bolas = document.querySelectorAll('.ball'); // Manipula as bolas de cores.
const dica = document.querySelector('div.dicas'); // Manipula div das dicas.
let pontos = 0;
let status = true;

const colorLv = () => parseInt(Math.random() * 255, 10);

// Gera cor aleatória.
const geraRGB = () => `(${colorLv()}, ${colorLv()}, ${colorLv()})`;

// Retira a cor das bolas.
const limpaCores = () => bolas.forEach((bola) => bola.style.backgroundColor = '');

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

function alarm() { // Muda a cor de fundo da pontuação.
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

function eventDicas() { // Evento para o botão de dicas.
  dicas.addEventListener('click', function () {
    if (dica.style.display === '' || dica.style.display === 'none') {
      dica.style.display = 'block';
    } else {
      dica.style.display = 'none';
    }
  });
}

window.onload = function () {
  configuraRGB();
  atribuiCores();
  eventCores();
  eventReset();
  eventDicas();
};
