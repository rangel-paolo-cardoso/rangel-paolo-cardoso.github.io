const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fecth exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();
