const btLogar = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');
const loginForm = document.forms['login-form'];
const formResg = document.forms['resg-form'];
const btRegister = document.getElementById('facebook-register');
const regisInputs = document.querySelectorAll('input.res-data');
const radios = document.querySelectorAll('input[type=radio]');
let mensagem = [];

const exibeLogin = () => email.value !== '' && alert(email.value);

function addRadio() {
  for (let j = 0; j < radios.length; j += 1) {
    if (radios[j].checked) {
      mensagem.push(radios[j].value);
    }
  }
}

function mensagemRetorno(resposta) {
  mensagem = [];
  if (resposta) {
    for (let i = 0; i < regisInputs.length; i += 1) {
      mensagem.push(regisInputs[i].value);
    }
    addRadio();
    alert(mensagem.join(' - '));
  } else {
    alert('Dados inválidos');
  }
}

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
