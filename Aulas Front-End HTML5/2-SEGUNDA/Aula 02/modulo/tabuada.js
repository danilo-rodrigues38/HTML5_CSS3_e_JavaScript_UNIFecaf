/******************************************************************************************
 * Objetivo: Realizar o caulculo de uma tabuada.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 07/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

// Gerar a tabuada de um número.
const calcularTabuada = function(numeroTabuada){
    let tabuada = numeroTabuada;
    let status = true;

    if (isNaN(tabuada) || tabuada == 0){
        status = false;
    } else {
        for (cont = 1; cont <= 10; cont++){
            console.log(`${tabuada} X ${cont.toString().padStart(2, ' ')} = ${(tabuada * cont).toString().padStart(2, ' ')}`);
        }
    }
    return status;
}

// Para acessar uma função em outro arquivo é necessário fazer o exports da função.
module.exports = {
    calcularTabuada
}
