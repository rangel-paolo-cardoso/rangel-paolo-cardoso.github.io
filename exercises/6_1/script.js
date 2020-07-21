const form = document.forms['formuser'];
const msg = document.querySelector('.data-error');
const btnEnviar = document.getElementById('btEnviar');
const btnReset = document.getElementById('btResetar');
const cData = document.getElementById('cData');
const resultado = document.querySelector('.resultado');
const objEstados = {
    'ac': 'Acre',
    'al': 'Alagoas',
    'ap': 'Amapá',
    'am': 'Amazonas',
    'ba': 'Bahia',
    'ce': 'Ceará',
    'df': 'Distrito Federal',
    'es': 'Espírito Santo',
    'go': 'Goiás',
    'ma': 'Maranhão',
    'mt': 'Mato Grosso',
    'ms': 'Mato Grosso do Sul',
    'mg': 'Minas Gerais',
    'pa': 'Pará',
    'pb': 'Paraíba',
    'pr': 'Paraná',
    'pe': 'Pernambuco',
    'pi': 'Piauí',
    'rj': 'Rio de Janeiro',
    'rn': 'Rio Grande do Norte',
    'rs': 'Rio Grande do Sul',
    'ro': 'Rondônia',
    'rr': 'Roraima',
    'sc': 'Santa Catarina',
    'sp': 'São Paulo',
    'se': 'Sergipe',
    'to': 'Tocantins',
};

function setEstado() {
    const estados = document.getElementById('cEst');
    for (estado in objEstados) {
        const option = document.createElement('option');
        option.value = estado;
        option.innerText = objEstados[estado];
        estados.appendChild(option);
    }
}

function validaDia(dia) {
    return dia > 0 && dia <= 31;
}

function validaMes(mes) {
    return mes > 0 && mes <= 12;
}

function validaAno(ano) {
    return ano > 0;
}

function mensagemDeErro() {
    msg.innerText = 'Data inválida! Digite a data corretamente.'
}

function verificaData() {
    const data = form.dataInic.value.split('/')
    const dia = validaDia(Number.parseInt(data[0], 10));
    const mes = validaMes(Number.parseInt(data[1], 10));
    const ano = validaAno(Number.parseInt(data[2], 10));
    alert(dia && mes && ano);
    return dia && mes && ano;
}

function recuperaData() {
    const data = form.dataInic.value.indexOf('/');
    const result = verificaData();
    if (data === -1 || !result) {
        mensagemDeErro();
    } else {
        msg.innerText = '';
        return true;
    }
}

function configuraResultado() {
    const dados = document.querySelectorAll('.resultado p');
    [...form.elements].forEach(campo => {
        if (['text', 'select-one', 'textarea'].indexOf(campo.type) > -1) {
            document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
        }
        if (campo.name === 'tipoRes' && campo.checked) {
            document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
        }
    });
}

function validaForm(event) {
    const valido = recuperaData();
    if (valido) {
        resultado.style.display = 'block';
        configuraResultado();
    }
}

function limpaTudo() {
    const spans = document.querySelectorAll('span');
    for (let i = 0; i < spans.length; i +=1) {
        spans[i].innerHTML  = '';
    }
    resultado.style.display = 'none';
}

window.onload = function () {
    setEstado();
    btnEnviar.addEventListener('click', validaForm);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
};

btnReset.addEventListener('click', limpaTudo);