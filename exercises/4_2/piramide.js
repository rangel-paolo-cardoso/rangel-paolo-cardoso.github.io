let n = 7;
let txt = [];
let midle = ((n - 1) / 2) + 1;

txt.length = n;

for(let i = 0; i < n ; i++) {
    txt[i] = ' ';
}

txt[midle - 1] = '*';

for(let i = 0 ; i <= midle-1 ; i++) {
    txt[midle-1-i] = '*';
    txt[midle-1+i] = '*';
    console.log(txt.join(''));
}