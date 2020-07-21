const form = document.forms['formuser'];
const msg = document.querySelector('.data-error');
const btnEnviar = document.getElementById('btEnviar');
const btnReset = document.getElementById('btResetar');
const cData = document.getElementById('cData');
const resultado = document.querySelector('.resultado');
const objEstados = {
  ac: 'Acre',
  al: 'Alagoas',
  ap: 'Amapá',
  am: 'Amazonas',
  ba: 'Bahia',
  ce: 'Ceará',
  df: 'Distrito Federal',
  es: 'Espírito Santo',
  go: 'Goiás',
  ma: 'Maranhão',
  mt: 'Mato Grosso',
  ms: 'Mato Grosso do Sul',
  mg: 'Minas Gerais',
  pa: 'Pará',
  pb: 'Paraíba',
  pr: 'Paraná',
  pe: 'Pernambuco',
  pi: 'Piauí',
  rj: 'Rio de Janeiro',
  rn: 'Rio Grande do Norte',
  rs: 'Rio Grande do Sul',
  ro: 'Rondônia',
  rr: 'Roraima',
  sc: 'Santa Catarina',
  sp: 'São Paulo',
  se: 'Sergipe',
  to: 'Tocantins',
};

const setEstado = () => {
  const estados = document.getElementById('cEst');
  for (estado in objEstados) {
    const option = document.createElement('option');
    option.value = estado;
    option.innerText = objEstados[estado];
    estados.appendChild(option);
  }
};

const validaDia = (dia) => dia > 0 && dia <= 31;

const validaMes = (mes) => mes > 0 && mes <= 12;

const validaAno = (ano) => ano > 0;

const mensagemDeErro = () => msg.innerText = 'Data inválida! Digite a data corretamente.';

const verificaData = () => {
  const data = form.dataInic.value.split('/');
  const dia = validaDia(Number.parseInt(data[0], 10));
  const mes = validaMes(Number.parseInt(data[1], 10));
  const ano = validaAno(Number.parseInt(data[2], 10));
  alert(dia && mes && ano);
  return dia && mes && ano;
};

const recuperaData = () => {
  const data = form.dataInic.value.indexOf('/');
  const result = verificaData();
  if (data === -1 || !result) {
    mensagemDeErro();
  } else {
    msg.innerText = '';
    return true;
  }
};

const configuraResultado = () => {
  const dados = document.querySelectorAll('.resultado p');
  [...form.elements].forEach((campo) => {
    if (['text', 'select-one', 'textarea'].indexOf(campo.type) > -1) {
      document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
    }
    if (campo.name === 'tipoRes' && campo.checked) {
      document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
    }
  });
};

const validaForm = (event) => {
  const valido = recuperaData();
  if (valido) {
    resultado.style.display = 'block';
    configuraResultado();
  }
};

const limpaTudo = () => {
  const spans = document.querySelectorAll('span');
  spans.forEach((span) => span.innerHTML = '');
  resultado.style.display = 'none';
};

window.onload = () => {
  setEstado();
  btnEnviar.addEventListener('click', validaForm);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

btnReset.addEventListener('click', limpaTudo);
