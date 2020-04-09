let peca = 'REI';

switch(peca.toLowerCase()) {
    case 'peão':
        console.log('Peão -> Para frente');
        break;
    case 'bispo':
        console.log('Bispo -> diagonal');
        break;
    case 'torre':
        console.log('Torre -> linha reta horizontal e verticalmente');
        break;
    case 'cavalo':
        console.log('Cavalo -> duas casas horizontal e verticalmente mais uma casa que forme um ângulo reto');
        break;
    case 'rainha':
        console.log('Rainha -> horizontal, vertical e diagonalmente quantas casas quiser');
        break;
    case 'rei':
        console.log('Rei -> horizontal, vertical e diagonalmente apenas uma casa por vez');
        break;
    default:
        console.log('Peça inválida!');
}