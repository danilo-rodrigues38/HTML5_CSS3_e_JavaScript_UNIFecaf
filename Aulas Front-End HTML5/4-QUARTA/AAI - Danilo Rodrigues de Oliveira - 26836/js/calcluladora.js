/******************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 17/03/2023
 * Versão: 0.0.1 
 ******************************************************/

// Função para realizar os calculos matemáticos

const calcular = function(tipoCalculo) {
    let operacao = tipoCalculo.toUpperCase();
    let num1 = document.getElementById('valor').value;
    let num2 = document.getElementById('valor').value;
    let divResultado = document.getElementById('resultado');
    let resultado;
    let status = true;
    let mensagemErro;

    // Validação para tratar a entrada de caracteres invalido.
    if (isNaN(num1) || isNaN(num2)) {
        status = false;
        msgErro = "Erro!!! Só é permitido valores numéricos."
    } else {
        switch (operacao) {
            case "SOMAR":
                resultado = SOMAR(num1, num2)
                break;
            case "SUBTRAIR":
                resultado = SUBTRAIR(num1, num2);
                break;
            case "MULTIPLICAR":
                resultado = MULTIPLICAR(num1,  num2);
                break;
            case "DIVIDIR":
                // Tratamento do erro para divisão por zero
                if (num2 == 0){
                    status = false;
                    msgErro = "Erro!!! Não é possivel realizar divisão por zero.";
                } else {
                    resultado = DIVIDIR(num1, num2);
                }
                break;   
            default:
                break;
        }
    }

    if (status) {
        divResultado.innerText = resultado.toFixed(2);
        divResultado.style.color = "black";
        divResultado.style.fontSize = "3em";
    } else {
        divResultado.innerText = msgErro;
        divResultado.style.color = "black";
        divResultado.style.fontSize = "2em";
    }
}

// Função para limpar todos os valores.
function limpar() {
    document.getElementById('valor').value = '';
    document.getElementById('resultado').innerText = '';
}
