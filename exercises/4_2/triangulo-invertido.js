let n = 5;
const txt = [];
let chart = '';
txt.length = n;

txt.fill(' ');

for (let i = n; i > 0; i -= 1) {
  txt[i] = '*';
  for (let j = 0; j < txt.length; j += 1) chart += txt[j];
  console.log(chart);
  chart = '';
}
