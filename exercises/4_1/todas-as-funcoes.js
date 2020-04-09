function adicao(a, b) {
    return `O resultado de ${a} + ${b} = ${a + b}`;
}

function subtracao(a, b) {
    return `O resultado de ${a} - ${b} = ${a - b}`;
}

function adicao(a, b) {
    return `O resultado de ${a} * ${b} = ${a * b}`;
}

function adicao(a, b) {
    return `O resultado de ${a} / ${b} = ${a / b}`;
}

function angulosDoTriangulo(ang1, ang2, ang3) {
    let result = false;
    if(ang1 + ang2 + ang3 === 180){
        result = true;
    }
    return `Os ângulos representam os ângulo internos de um triângulo? ${result}`;
}

function calculoImposto(custoProd, valorVenda) {
    if(custoProd > 0 && valorVenda > 0) {
        lucro = (valorVenda - custoProd * 0.8) * 1000;
        return `O lucro da empresa foi de ${lucro}`;
    } else {
        return 'Erro!';
    }
}

function comparacao(num1, num2) {
    if(num1 > num2) {
        return `Entre ${num1} e ${num2} o maior número é ${num1}`;
    } else {
        return `Entre ${num1} e ${num2} o maior número é ${num2}`;
    }
}

function imparDeTres(num1, num2, num3) {
    if(num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
        return `Entre ${num1}, ${num2} e ${num3} existe um ímpar.`;
    } else {
        return `Não há impares entre ${num1}, ${num2}e ${num3}.`;;
    }
}

function impostoDeRenda(salBruto) {
    let salarioBase;
    let salarioLiquido;
    let inss;
    let ir;

    if(salBruto <= 1556.94) {
        inss = salBruto * 0.08;
    } else if(salBruto >= 1556.95 && salBruto <= 2594.92) {
        inss = salBruto * 0.09;
    } else if(salBruto >= 2594.93 && salBruto <= 5189.82) {
        inss = salBruto * 0.11;
    } else  {
        inss = 570.88;
    }

    salarioBase = salBruto - inss;

    if(salarioBase <= 1903.98) {
        ir = 0;
    } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        ir = (salarioBase * 0.075) - 142.8;
    } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        ir = (salarioBase * 0.15) - 354.8;
    } else if(salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        ir = (salarioBase * 0.225) - 636.13;
    } else {
        ir = (salarioBase * 0.275) - 869.36;
    }

    salarioLiquido = salarioBase - ir;
    return `Salário líquido é de R$ ${salarioLiquido}.`
}

function maiorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `O maior número é o: ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
        return `O maior número é o: ${num2}`;
    } else {
        return `O maior número é o: ${num3}`;
    }
}

function modulo(a, b) {
    return `O resultado do resto da divisão de ${a} por ${b} = ${a % b}`;
}

function notaPorcentagem(nota) {
    if(nota >= 90 && nota <= 100) {
        return 'Porcentagem >= 90 -> A';
    } else if((nota >= 80) && (nota < 90)) {
        return 'Porcentagem >= 80 -> B';
    } else if((nota >= 70) && (nota < 80)) {
        return 'Porcentagem >= 70 -> C';
    } else if((nota >= 60) && (nota < 70)) {
        return 'Porcentagem >= 60 -> D';
    } else if((nota >= 50) && (nota < 60)) {
        return 'Porcentagem >= 50 -> E';
    } else if((nota < 50) && (nota >= 0)) {
        return 'Porcentagem < 50 -> F';
    } else {
        return 'Nota inválida';
    }
}

function parDeTres(num1, num2, num3) {
    if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
        return `Entre ${num1}, ${num2} e ${num3} existe um par.`;
    } else {
        return `Não há pares entre ${num1}, ${num2}e ${num3}.`;;
    }
}

function pecaDeXadrez(peca) {
    switch(peca.toLowerCase()) {
        case 'peão':
            return 'Peão -> Para frente';
        case 'bispo':
            return 'Bispo -> diagonal';
        case 'torre':
            return 'Torre -> linha reta horizontal e verticalmente';
        case 'cavalo':
            return 'Cavalo -> duas casas horizontal e verticalmente mais uma casa que forme um ângulo reto';
        case 'rainha':
            return 'Rainha -> horizontal, vertical e diagonalmente quantas casas quiser';
        case 'rei':
            return 'Rei -> horizontal, vertical e diagonalmente apenas uma casa por vez';
        default:
            return 'Peça inválida!';
    }
}

function positiveOrNegative(numero) {
    if (numero > 0) {
        return 'positive';
    } else if (numero < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}