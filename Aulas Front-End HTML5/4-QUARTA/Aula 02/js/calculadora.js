/******************************************************************** 
 
    * Objetivo: Criar funções para realizar calculos matemáticos
    * Data: 15/02/2023
    * Autor: Ana Beatriz
    * Versão: 1.0

********************************************************************/

// Função para realizar os calculos matemáticos

// Modelo 1 de criação de função (tradicional)
/* function calcular(tipoCalculo) {
    // Recebe o argumento e converte para MAISCÚLO (toUpperCase();)
    let operacao = tipoCalculo.toUpperCase();
    // Recebe os valores digitados nas caixas de texto, no HTML
    // (getElementById - Pega o elemento pelo ID atribuido)
    let num1 = document.getElementById('valor1').value;
    let num2 = document.getElementById('valor2').value;
    let divResultado = document.getElementById('resultado');
    let resultado;
    let status = true;
    let msgErro;

    
    //Exemplo utilizando o "if".
    //if(operacao == 'SOMAR'){
    //    resultado = Number(num1) + Number(num2)
    //}else if(operacao == 'SUBTRAIR'){
    //    resultado = Number(num1) - Number(num2)
    //}else if(operacao == 'MULTIPLICAR'){
    //    resultado = Number(num1) * Number(num2)
    //}else if (operacao == 'DIVIDIR'){
    //    resultado = Number(num1) / Number(num2)
    //}
    

    // Validação para tratar a entrada de caracteres invalido.
    // isNaN() - é uma função que valida se a variável tem valor numérico ou não
    if (isNaN(num1) || isNaN(num2)) {
        status = false;
        msgErro = "Erro!!! Entrada de valores inválida, não é permito letras."
    } else {
        // Exemplo utilizando o "switch".
        switch (operacao) {
            case "SOMAR":
                resultado = Number(num1) + Number(num2);
                break;
            case "SUBTRAIR":
                resultado = Number(num1) - Number(num2);
                break;
            case "MULTIPLICAR":
                resultado = Number(num1) * Number(num2);
                break;
            case "DIVIDIR":
                // Tratamento de erro para divisão por zero
                if (num2 == 0){
                    status = false;
                    msgErro = "Erro!!! Não é possivel realizar divisão por zero.";
                } else {
                    resultado = Number(num1) / Number(num2);
                }
                break;   
            default:
                break;
        }
    }

    if (status) {
        //toFixed(2); - Permite limitar a quantidade casas decimais. 
        divResultado.innerText = resultado.toFixed(2);
        divResultado.style.color = "black";
        divResultado.style.fontSize = "3em";
    } else {
        divResultado.innerText = msgErro;
        divResultado.style.color = "black";
        divResultado.style.fontSize = "2em";
    }
    
    //alert(resultado);

    // alert('Testando os botões ' + operacao) TESTE Dos botões;
} */

// Modelo 2 de criação de função (callback)
const calcular = function(tipoCalculo) {
    // Recebe o argumento e converte para MAISCÚLO (toUpperCase();)
    let operacao = tipoCalculo.toUpperCase();
    /* Recebe os valores digitados nas caixas de texto, no HTML
    (getElementById - Pega o elemento pelo ID atribuido)*/
    let num1 = document.getElementById('valor1').value;
    let num2 = document.getElementById('valor2').value;
    let divResultado = document.getElementById('resultado');
    let resultado;
    let status = true;
    let msgErro;

    
    //Exemplo utilizando o "if".
    //if(operacao == 'SOMAR'){
    //    resultado = Number(num1) + Number(num2)
    //}else if(operacao == 'SUBTRAIR'){
    //    resultado = Number(num1) - Number(num2)
    //}else if(operacao == 'MULTIPLICAR'){
    //    resultado = Number(num1) * Number(num2)
    //}else if (operacao == 'DIVIDIR'){
    //    resultado = Number(num1) / Number(num2)
    //}
    

    // Validação para tratar a entrada de caracteres invalido.
    // isNaN() - é uma função que valida se a variável tem valor numérico ou não
    if (isNaN(num1) || isNaN(num2)) {
        status = false;
        msgErro = "Erro!!! Entrada de valores inválida, não é permito letras."
    } else {
        // Exemplo utilizando o "switch".
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
                // Tratamento de erro para divisão por zero
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
        //toFixed(2); - Permite limitar a quantidade casas decimais. 
        divResultado.innerText = resultado.toFixed(2);
        divResultado.style.color = "black";
        divResultado.style.fontSize = "3em";
    } else {
        divResultado.innerText = msgErro;
        divResultado.style.color = "black";
        divResultado.style.fontSize = "2em";
    }
    
    //alert(resultado);

    // alert('Testando os botões ' + operacao) TESTE Dos botões;
}

// Função para limpar todos os valores.
function limpar() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '';
}

// Modelo 3 de criação de função (Arrow Function)
const SOMAR = (valor1, valor2) => Number(valor1) + Number(valor2);
const SUBTRAIR = (valor1, valor2) => Number(valor1) - Number(valor2);
const MULTIPLICAR = (valor1, valor2) => Number(valor1) * Number(valor2);
const DIVIDIR = (valor1, valor2) => Number(valor1) / Number(valor2);

// Posso fazer um jeito, que quando eu aperto o CE, perguntar
// se quer apagar os dois valores, sim ou não, caso não, perguntar qual valor quer apagar.