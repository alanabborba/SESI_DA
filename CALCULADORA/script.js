const campo = document.getElementById("campo");

function digitar(valor) {

if (valor == 'limpar') {
        campo.value = "";
    } else if (valor == "=") {
        campo.value = eval(campo.value)
        qtd_calculos++
    } else {
        campo.value = campo.value + valor;
    }

}