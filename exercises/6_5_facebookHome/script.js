const btLogar = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');
const loginForm = document.forms['login-form'];
const formResg = document.forms['resg-form'];
const btRegister = document.getElementById('facebook-register');
const regisInputs = document.querySelectorAll('input.res-data');
const radios = document.querySelectorAll('input[type=radio]');
let mensagem = [];

const exibeLogin = () => email.value !== '' && alert(email.value);

const addRadio = () => radios.forEach((radio) => radio.checked && mensagem.push(radio.value));

const mensagemRetorno = (resposta) => {
  mensagem = [];
  if (resposta) {
    regisInputs.forEach((input) => mensagem.push(input.value));
    addRadio();
    alert(mensagem.join(' - '));
  } else {
    alert('Dados inválidos');
  }
};

const validaResitro = () => {
  let valid = true;
  regisInputs.forEach((input) => {
    if (input.value === '') {
      valid = false;
    }
  });
  mensagemRetorno(valid);
};

window.onload = () => {
  btLogar.onclick = exibeLogin;
  btRegister.onclick = validaResitro;
  formResg.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};
