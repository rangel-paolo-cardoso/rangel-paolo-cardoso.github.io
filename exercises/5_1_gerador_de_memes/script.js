const inputImage = document.getElementById('meme-insert'); // Manipula o Input type="file".
const inputText = document.getElementById('text-input'); // Manipula o a caixa para inserir texto.
const container = document.getElementById('meme-image-container'); // container da imagem.
const txt = document.getElementById('meme-text'); // Manipula tag p do texto da imagem.
const img = document.getElementById('meme-image'); // Manipula a imagem.
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const img1 = document.getElementById('meme-1').addEventListener('click', usaMeme);
const img2 = document.getElementById('meme-2').addEventListener('click', usaMeme);
const img3 = document.getElementById('meme-3').addEventListener('click', usaMeme);
const img4 = document.getElementById('meme-4').addEventListener('click', usaMeme);

inputImage.addEventListener('change', addImage); // Evento para o Input type="file".
inputText.addEventListener('keyup', addText); // Evento para a caixa de texto.
btn1.addEventListener('click', mudaBorda); // Evento para o botão1.
btn2.addEventListener('click', mudaBorda); // Evento para o botão2.
btn3.addEventListener('click', mudaBorda); // Evento para o botão3.

const apareceImagem = () => img.style.display = 'block';

function addImage() {
  img.src = URL.createObjectURL(event.target.files[0]);
  container.appendChild(img);
  apareceImagem();
}

function addText() {
  let memeTxt = inputText.value;
  txt.innerText = memeTxt;
}

function mudaBorda(event) {
  let tipo = event.target.id;
  if (tipo === 'button1') {
    container.style.border = '3px dashed red';
  } else if (tipo === 'button2') {
    container.style.border = '5px double blue';
  } else {
    container.style.border = '6px groove green';
  }
}

function usaMeme(event) {
  let selection = event.target.src;
  apareceImagem();
  switch (event.target.id) {
    case 'meme-1':
      img.src = selection;
      break;
    case 'meme-2':
      img.src = selection;
      break;
    case 'meme-3':
      img.src = selection;
      break;
    case 'meme-4':
      img.src = selection;
      break;
  }
}
