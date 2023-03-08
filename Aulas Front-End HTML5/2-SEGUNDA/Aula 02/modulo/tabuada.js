/******************************************************************************************
 * Objetivo: Realizar o caulculo de uma tabuada.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 07/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

// Gerar a tabuada de um número.
const calcularTabuada = function(numeroTabuada){
    let tabuada = numeroTabuada;

    if (isNaN(tabuada) || tabuada == 0){
        console.log("Erro! Digite apenas números diferentes de 0 (zero).");
    } else {
        for (cont = 1; cont <= 10; cont++){
            console.log(`${tabuada} X ${cont.toString().padStart(2, ' ')} = ${(tabuada * cont).toString().padStart(2, ' ')}`);
        }
    }
    return status;
}

calcularTabuada(5);

