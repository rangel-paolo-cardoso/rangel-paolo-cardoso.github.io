const textoTarefa = document.getElementById('texto-tarefa'); // Manipula a caixa de texto.
const btnAdiciona = document.getElementById('criar-tarefa'); // Manipula o botão que adiciona na lista.
const btnLimpa = document.getElementById('apaga-tudo'); // Manipula o botão que apaga a lista.
const btnLimpaConcluidas = document.getElementById('remover-finalizados'); // Manipula o botão que limpa itens concluídos.
const btnSalvaTarefas = document.getElementById('salvar-tarefas'); // Manipula botão salva tarefas.
const btnMoveCima = document.getElementById('mover-cima'); // Manipula botão mover para cima.
const btnMoveBaixo = document.getElementById('mover-baixo'); // Manipula botão mover para baixo.
const btnRemoveSelecionado = document.getElementById('remover-selecionado'); // Manipula remover item.
const lista = document.getElementById('lista-tarefas'); // Manipula a lista de tarefas.
const message = document.getElementById('mensagem'); // Manipula a div da mensagem de erro.
const corpo = document.body; // Manipula o corpo.
const pelicula = document.getElementById('pelicula-glass'); // Manipula película.
const modal = document.getElementById('modal-window'); // Manipula modal.
const msgText = document.getElementById('msgText'); // Manipula mensagem.

const minhaLista = [];

// Verifica so o navegador tem suporte a Storage.
const storeExists = () => typeof Storage !== 'undefined';

const selecionaItem = () => { // Altera o fundo do item clicado.
  const itens = document.querySelectorAll('li');
  itens.forEach((item) => {
    item.style.backgroundColor = 'white';
    item.classList.remove('selected'); // remova uma classe específica.
  });
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected'); // Adiciona um classe a mais no elemento.
};

const marcaItem = () => { // Risca o item que for clicado duas vezes, e desfaz o risco.
  const indentifier = event.target.className.indexOf('completed') > -1;
  (indentifier)
  ? event.target.classList.remove('completed')
  : event.target.classList.add('completed');
};

const criaItem = () => { // Cria item com base do contexto e necessidade.
  if (!textoTarefa.value) {
    message.style.display = 'block';
  } else {
    const item = document.createElement('li');
    minhaLista.push(textoTarefa.value);
    item.innerHTML = textoTarefa.value;
    item.addEventListener('click', selecionaItem);
    item.addEventListener('dblclick', marcaItem);
    lista.appendChild(item);
    textoTarefa.value = '';
    textoTarefa.focus();
    message.style.display = 'none';
  }
};

const carregaLista = () => { // Carrega a lista salva no Storage usando a função criaItem.
  if (localStorage.itens) {
    lista.innerHTML = localStorage.itens;
    const itens = lista.children; // todos os li da lista.
    for (item of itens) {
      item.addEventListener('click', selecionaItem);
      item.addEventListener('dblclick', marcaItem);
    }
  }
};

const exibeModal = () => {
  setTimeout(() => {
    modal.style.marginTop = '300px';
    document.querySelector('.pagina').style.filter = 'blur(10px)';
  }, 100);
};

function setModal(param) {
  if (param === 1) {
    pelicula.style.display = 'flex';
    msgText.innerText = 'Alterações salvas com sucesso!✅';
    exibeModal();
  } else if (param === 2) {
    pelicula.style.display = 'flex';
    msgText.innerText = 'Lista apagada!✅';
    exibeModal();
  } else {
    modal.style.marginTop = '-220px';
    document.querySelector('.pagina').style.filter = 'blur(0)';
    setTimeout(function () {
      pelicula.style.display = 'none';
    }, 1000);
  }
}

function concluiSalvamento() { // Função que salva no localStorage.
  const itens = lista.childNodes;
  if (itens.length === 0) {
    localStorage.clear();
    setModal(1);
  } else {
    localStorage.clear();
    localStorage.setItem('itens', `${lista.innerHTML}`);
    setModal(1);
  }
}

function salvaListaNoStorage() { // Usa a função concluiSalvamento, exibe mensagem se necessário.
  if (storeExists()) {
    concluiSalvamento();
  } else {
    alert('Seu navegador não tem suporte a Local Storage!');
  }
}

// Evento para o botão que adiciona itens.
const eventBtnAdiciona = () => btnAdiciona.addEventListener('click', () => criaItem());

// Evento para o botão que limpa a lista.
const eventBtnLimpa = () => btnLimpa.addEventListener('click', () => lista.innerHTML = '');

const eventBtnLimpaConcluidas = () => {
  btnLimpaConcluidas.addEventListener('click', () => {
    const concluidas = document.querySelectorAll('.completed');
    concluidas.forEach((task) => lista.removeChild(task));
  });
};

const eventBtnSalvarTarefas = () =>
  btnSalvaTarefas.addEventListener('click', () => salvaListaNoStorage());

function trocaValores(itemSelecionado, itemSeguinte) {
  const backText = itemSeguinte.innerText;
  const backupSeguinte = itemSeguinte.className;
  const backupSelecionado = itemSelecionado.className;
  itemSeguinte.className = backupSelecionado;
  itemSelecionado.className = backupSeguinte;
  itemSeguinte.innerText = itemSelecionado.innerText;
  itemSelecionado.innerText = backText;
  itemSeguinte.style.backgroundColor = 'rgb(128,128,128)';
  itemSelecionado.style.backgroundColor = 'white';
}

const eventBtnMoveCima = () => { // Evento para o botão mover-cima.
  btnMoveCima.addEventListener('click', () => {
    const itemSelecionado = document.querySelector('.selected');
    const itemAnterior = itemSelecionado.previousElementSibling;
    if (itemAnterior !== null) trocaValores(itemSelecionado, itemAnterior);
  });
};

const eventBtnMoveBaixo = () => { // Evento para o botão mover-baixo.
  btnMoveBaixo.addEventListener('click', () => {
    const itemSelecionado = document.querySelector('.selected');
    const itemPosterior = itemSelecionado.nextElementSibling;
    if (itemPosterior !== null) trocaValores(itemSelecionado, itemPosterior);
  });
};

const eventBtnRemoveSelecionado = () =>
  btnRemoveSelecionado.addEventListener('click', () =>
    document.querySelector('.selected').remove()
  );

const alteraCor = () => {
  const color = () => parseInt(Math.random() * 255, 10);
  corpo.style.backgroundColor = `rgb(${color()},${color()},${color()})`;
};

window.onload = () => {
  eventBtnAdiciona();
  eventBtnLimpa();
  eventBtnLimpaConcluidas();
  eventBtnSalvarTarefas();
  carregaLista();
  eventBtnMoveCima();
  eventBtnMoveBaixo();
  eventBtnRemoveSelecionado();
  setInterval(alteraCor, 4000);
};
