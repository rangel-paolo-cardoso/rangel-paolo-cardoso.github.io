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

const minhaLista = [];

function storeExists() { // Verifica so o navegador tem suporte a Storage.
  return typeof Storage !== 'undefined';
}

function selecionaItem() { // Altera o fundo do item clicado.
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].style.backgroundColor = 'white';
    itens[i].classList.remove('selected'); // remova uma classe específica.
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected'); // Adiciona um classe a mais no elemento.
}

function marcaItem() { // Risca o item que for clicado duas vezes, e desfaz o risco.
  const indentifier = event.target.className.indexOf('completed') > -1;
  if (indentifier) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function criaItem() { // Cria item com base do contexto e necessidade.
  if (textoTarefa.value === '') {
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
}

function carregaLista() { // Carrega a lista salva no Storage usando a função criaItem.
  if (localStorage.itens) {
    lista.innerHTML = localStorage.itens;
    const li = lista.children;
    for (let i = 0; i < li.length; i += 1) {
      li[i].addEventListener('click', selecionaItem);
      li[i].addEventListener('dblclick', marcaItem);
    }
  }
}

function concluiSalvamento() { // Função que salva no localStorage.
  const itens = lista.childNodes;
  if (itens.length === 0) {
    localStorage.clear();
  } else {
    localStorage.clear();
    localStorage.setItem('itens', `${lista.innerHTML}`);
    alert('Sua lista foi salva com sucesso!🤗✅');
    pelicula.style.display = 'flex';
  }
}

function salvaListaNoStorage() { // Usa a função concluiSalvamento, exibe mensagem se necessário.
  if (storeExists()) {
    concluiSalvamento();
  } else {
    alert('Seu navegador não tem suporte a Local Storage!');
  }
}

function eventBtnAdiciona() { // Evento para o botão que adiciona itens.
  btnAdiciona.addEventListener('click', function () {
    criaItem();
  });
}

function eventBtnLimpa() { // Evento para o botão que limpa a lista.
  btnLimpa.addEventListener('click', function () {
    lista.innerHTML = '';
  });
}

function eventBtnLimpaConcluidas() {
  btnLimpaConcluidas.addEventListener('click', function () {
    const concluidas = document.querySelectorAll('.completed');
    for (let c = 0; c < concluidas.length; c += 1) {
      lista.removeChild(concluidas[c]);
    }
  });
}

function eventBtnSalvarTarefas() {
  btnSalvaTarefas.addEventListener('click', function () {
    salvaListaNoStorage();
  });
}

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

function eventBtnMoveCima() { // Evento para o botão mover-cima.
  btnMoveCima.addEventListener('click', function () {
    const itemSelecionado = document.querySelector('.selected');
    const itemAnterior = itemSelecionado.previousElementSibling;
    if (itemAnterior !== null) {
      trocaValores(itemSelecionado, itemAnterior);
    }
  });
}

function eventBtnMoveBaixo() { // Evento para o botão mover-baixo.
  btnMoveBaixo.addEventListener('click', function () {
    const itemSelecionado = document.querySelector('.selected');
    const itemPosterior = itemSelecionado.nextElementSibling;
    if (itemPosterior !== null) {
      trocaValores(itemSelecionado, itemPosterior);
    }
  });
}

function eventBtnRemoveSelecionado() {
  btnRemoveSelecionado.addEventListener('click', function () {
    document.querySelector('.selected').remove();
  });
}

function alteraCor() {
  const red = Number.parseInt(Math.random() * 255, 10);
  const green = Number.parseInt(Math.random() * 255, 10);
  const blue = Number.parseInt(Math.random() * 255, 10);
  corpo.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

window.onload = function () {
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
