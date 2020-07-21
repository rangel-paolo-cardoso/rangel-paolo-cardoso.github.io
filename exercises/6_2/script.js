const form = document.forms['formuser'];
const btnEnviar = document.getElementById('btEnviar');
const btnReset = document.getElementById('btResetar');
const cData = document.getElementById('cData');
const resultado = document.querySelector('footer');
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

function configuraResultado() {
    [...form.elements].forEach(campo => {
        if (['text', 'select-one', 'textarea'].indexOf(campo.type) > -1) {
            document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
        }
        if (campo.name === 'tipoRes' && campo.checked) {
            document.querySelector(`span.span${campo.name}`).innerHTML = campo.value;
        }
    });
}

function validaForm() {
    if (validation.isValid()) {
        resultado.classList.remove('is-hidden');
        configuraResultado();
    }
}

function limpaTudo() {
    const spans = document.querySelectorAll('span');
    for (let i = 0; i < spans.length; i +=1) {
        spans[i].innerHTML  = '';
    }
    resultado.classList.add('is-hidden');
}

window.onload = function () {
    setEstado();
    cData.DatePickerX.init({
        format: 'dd/mm/yyyy',
    });
    validation.init('#myForm', {
        events: ['submit', 'change', 'keyup', 'paste'],
    });
    btnEnviar.addEventListener('click', validaForm);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
};

btnReset.addEventListener('click', limpaTudo);