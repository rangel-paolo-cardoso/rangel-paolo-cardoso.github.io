let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim',
};

let secondInfo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
};

for(chave in info, secondInfo) {
    console.log(`${info[chave]} e ${secondInfo[chave]}`);
    if(info[chave] === secondInfo[chave]) console.log('Ambos recorrentes');
}