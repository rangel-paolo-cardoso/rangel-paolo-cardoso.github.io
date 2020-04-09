let n = 5;
let txt = [];
let chart = '';
txt.length = n;

for(let i = 0 ; i < txt.length ; i++) {
    txt[i] = ' ';
}

for(let i = n ; i > 0 ; i--) {
    txt[i] = '*';
    for(let j = 0 ; j < txt.length ; j++) {
        chart += txt[j];
    }
    console.log(chart);
    chart = '';
}