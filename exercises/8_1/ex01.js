const fat = (n) => (n === 0)? 1 : n * fat(n-1);

console.log(fat(5));