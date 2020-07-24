const habs = [
  'Java',
  'JavaScript',
  'HTML',
  'Excel',
  'Matemática'
];

const myHabs = str => {
  return `${str} \nMinhas cinco habilidades são: \n${habs.sort().join(', \n')} \n#goTrybe`;
};

const replaceStr = str => {
  const frase = 'Tryber x aqui! \nTudo bem?';
  return myHabs(frase.replace('x', str));
};

const txt = 'Rangel';
console.log(replaceStr(txt));
