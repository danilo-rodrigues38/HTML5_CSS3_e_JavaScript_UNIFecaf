/******************************************************************************************
 * Objetivo: Realizar o claculo de área de um quadrado e um círculo.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 13/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

const getCalculoQuadrado = function(base, altura){
    let base = base;
    let altura = altura;
    let status = true;

    if (isNaN(base) || isNaN(altura)){
        status = false;
    } else {
        console.log("A área do quadrado é " + base * altura);
    }
    return status;
};

const getCalculoCirculo = function(num1){
    let raio = num1;
    let area = 0;
    let status = true;

    if(isNaN(raio)){
        status = false;
    } else {
        area = Math.PI * area * area;
        console.log("A área do círculo é " + area)
    }
    return status;
};

module.exports = {
    getCalculoQuadrado,
    getCalculoCirculo
};
