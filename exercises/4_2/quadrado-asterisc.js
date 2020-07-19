let n = 5;

for (let i = 0; i < n; i++) {
  console.log([...Array(5)].fill('*').join(''));
}
