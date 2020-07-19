const avaliaArray = (listaNomes) =>
  listaNomes.reduce((res, nxt) => (res.length > nxt.length ? res : nxt));

console.log(avaliaArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
