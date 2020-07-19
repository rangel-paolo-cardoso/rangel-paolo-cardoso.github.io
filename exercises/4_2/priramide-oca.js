let n = 7;
const txt = [];
const midle = n / 2 + 0.5;

txt.length = n;
txt.fill(' ');
txt[midle - 1] = '*';

for (let i = 0; i <= midle - 1; i++) {
  txt[midle - 1 - i] = '*';
  txt[midle - 1 + i] = '*';
  console.log(txt.join(''));
  if (i == 0) txt[midle - 1] = ' ';
  if (i > 0 && i < midle - 1) {
    txt[midle - 1 - i] = ' ';
    txt[midle - 1 + i] = ' ';
  }
  if (i == midle - 2) txt.fill('*');
}
