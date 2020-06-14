const secItems = document.querySelector('.items'); // Manipula section items.
const carrinho = document.querySelector('.cart__items');
const btnLimpa = document.querySelector('.empty-cart'); // Manipula o botão que limpa ista.
const loading = document.querySelector('.loading'); // Maniluça o loading.
const total = document.querySelector('.total-price'); // Manipula o span #total.
let tot = 0;
let cart = []; // Array para os ids de cada produto.

const saveToStorage = () => { // Salvo no Storage.
  localStorage.setItem('itens_carrinho', JSON.stringify(cart));
};

const limpaLista = () => { // Limpa os itens do carrinho.
  carrinho.innerText = '';
  cart = [];
  tot = 0;
  total.innerHTML = 0;
  saveToStorage();
};

btnLimpa.addEventListener('click', limpaLista);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const somaTudo = async (price, sinal) => { // Soma o valor dos itens do carrinho.
  try {
    if (sinal) {
      tot += price;
    } else {
      tot -= price;
    }
    total.innerHTML = parseFloat(tot.toFixed(2));
  } catch (err) {
    console.log(err);
  }
};

function cartItemClickListener(event) {
  const pos = event.target.innerText.indexOf('$') + 1;
  const valor = event.target.innerHTML.substring(pos).replace('$', ' ').trim();
  somaTudo(parseFloat(valor), false);
  const code = event.target.innerText.substring(5, 18);
  cart.splice(cart.indexOf(code), 1);
  event.target.remove();
  saveToStorage();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addToCart = async (code) => { // Adiciona itens no carrinho.
  try {
    const resposta = await fetch(`https://api.mercadolibre.com/items/${code}`);
    const json = await resposta.json();
    const { id, title, price } = await json;
    const item = await createCartItemElement({ sku: id, name: title, salePrice: price });
    await cart.push(id);
    await carrinho.append(item);
    await somaTudo(parseFloat(price), true);
    await saveToStorage();
  } catch (error) {
    console.log(error);
  }
};

const completaAdd = (e) => { // Complementa a addToCart().
  const code = e.target.parentNode.firstChild.innerText;
  addToCart(code);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', completaAdd);
  section.appendChild(button);

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const carregaLista = () => {
  const salvos = JSON.parse(localStorage.itens_carrinho);
  if (localStorage.itens_carrinho) {
    salvos.forEach(code => addToCart(code));
  }
};

const fetchList = async () => { // Preenche a tela com os itens.
  try {
    const resposta = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$computador');
    const json = await resposta.json();
    await json.results.forEach((prod) => {
      const { id: sku, title: name, thumbnail: image } = prod;
      secItems.append(createProductItemElement({ sku, name, image }));
    });
    carregaLista(); // Carrega o carrinho se estiver salvo.
  } catch (error) {
    console.log(error);
  }
};

fetchList(); // Carrega itens para selecionar.

window.onload = function onload() {
  setTimeout(() => loading.remove(), 2150);
};
