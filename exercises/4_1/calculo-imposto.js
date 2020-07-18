const custoProduto = 10;
const valorVenda = 13;
let lucro = 0;

if(custoProduto > 0 && valorVenda > 0) {
    lucro = (valorVenda - custoProduto * 0.8) * 1000;
    console.log('O lucro da empresa foi de ', lucro);
} else {
    console.log('Erro!');
}