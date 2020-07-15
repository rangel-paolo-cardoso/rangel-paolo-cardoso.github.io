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

const atribuiCores = () => { // Atribui uma cor para cada bola.
  const corCorreta = Math.floor(Math.random() * bolas.length);
  bolas[corCorreta].style.backgroundColor = `rgb${adivinhaRGB.innerText}`;
  bolas.forEach((bola) => {
    if (bola.style.backgroundColor === '') {
      bola.style.backgroundColor = `rgb${geraRGB()}`;
    }
  });
};

// Configura o texto com a cor a ser adivinhada.
const configuraRGB = () => adivinhaRGB.innerText = geraRGB();

// Altera o status, limita para 1 acerto por rodada.
const mudaStatus = () => status = false;

const alarm = () => // Muda a cor de fundo da pontuação.
  (pontos > 0)
  ? score.classList.remove('pontos-neg')
  : score.classList.add('pontos-neg');

const configuraPlcar = (tipo) => { // Configura placar incrementando pontos.
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
};

const clickBall = () => { // Avalia o acerto.
  const cor = event.target.style.backgroundColor;
  if (cor === `rgb${adivinhaRGB.innerText}`) {
    answer.innerText = 'Acertou!';
    configuraPlcar(1);
  } else {
    configuraPlcar(2);
    answer.innerText = 'Errou! Tente novamente!';
  }
};

// Adicona evento para cada bola.
const eventCores = () =>
  bolas.forEach((bola) => bola.addEventListener('click', clickBall));

const reiniciaJogo = () => { // Reinicia o jogo e seus valores padrão.
  limpaCores();
  configuraRGB();
  atribuiCores();
  status = true;
  answer.innerText = 'Escolha uma cor';
};

// Evento para o botão de reset.
const eventReset = () => reset.addEventListener('click', reiniciaJogo);

const eventDicas = () => { // Evento para o botão de dicas.
  dicas.addEventListener('click', () => {
    if (dica.style.display === '' || dica.style.display === 'none') {
      dica.style.display = 'block';
    } else {
      dica.style.display = 'none';
    }
  });
};

window.onload = () => {
  configuraRGB();
  atribuiCores();
  eventCores();
  eventReset();
  eventDicas();
};
