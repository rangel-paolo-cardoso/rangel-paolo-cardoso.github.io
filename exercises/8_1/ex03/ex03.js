let clickCount = 0;
const btnClick = document.getElementById('bt-click');
const counter = document.getElementById('count');

btnClick.addEventListener('click', () => {
  clickCount += 1;
  counter.innerText = clickCount;
});