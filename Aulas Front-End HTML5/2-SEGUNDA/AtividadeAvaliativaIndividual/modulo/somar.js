/******************************************************************************************
 * Objetivo: Realizar o somatório entre dois números.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 13/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

function somar(numero1, numero2) {
    return numero1 + numero2;
};

// Para acessar uma função em outro arquivo é necessário fazer o exports da função.
module.exports = {
    somar
}