let custoProduto = 10;
let valorVenda = 13;
let lucro;

if(custoProduto > 0 && valorVenda > 0) {
    lucro = (valorVenda - custoProduto * 0.8) * 1000;
    console.log('O lucro da empresa foi de ', lucro);
} else {
    console.log('Erro!');
}