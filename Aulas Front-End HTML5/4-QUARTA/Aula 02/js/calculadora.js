/******************************************************************** 
 
    * Objetivo: Criar funções para realizar calculos matemáticos
    * Data: 15/02/2023
    * Autor: Ana Beatriz
    * Versão: 1.0

********************************************************************/

// Função para realizar os calculos matemáticos 
function calcular(tipoCalculo){
    // Recebe o argumento e converte para MAISCÚLO (toUpperCase();)
    let operacao = tipoCalculo.toUpperCase();
    /* Recebe os valores digitados nas caixas de texto, no HTML
    (getElementById - Pega o elemento pelo ID atribuido)*/
    let num1 = document.getElementById('valor1').value;
    let num2 = document.getElementById('valor2').value;
    let divResultado = document.getElementById('resultado');
    let resultado;

/*
    Exemplo utilizando o if.
    if(operacao == 'SOMAR'){
        resultado = Number(num1) + Number(num2)
    }else if(operacao == 'SUBTRAIR'){
        resultado = Number(num1) - Number(num2)
    }else if(operacao == 'MULTIPLICAR'){
        resultado = Number(num1) * Number(num2)
    }else if (operacao == 'DIVIDIR'){
        resultado = Number(num1) / Number(num2)
    } */

    // Exemplo utilizando o Switch.
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
            resultado = Number(num1) / Number(num2);
            break;   
        default:
            break;
    }

    //toFixed(2); - Permite limitara quantidade casas decimais. 
    divResultado.innerHTML = resultado.toFixed(2);
    //alert(resultado);

    // alert('Testando os botões ' + operacao) TESTE Dos botões;
}

// Função para limpar todos os valores.
function limpar(){
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '';

}

// Posso fazer um jeito , que quando eu aperto o ce, perguntar
// se que apagar as duas , sim ou não, caso não , perguntar qual valor quer apagar.