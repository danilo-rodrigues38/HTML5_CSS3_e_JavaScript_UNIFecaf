/******************************************************************************************
 * Objetivo: Realizar o calculo de área de um quadrado e um círculo.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 13/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

const getCalculoQuadrado = function(vlbase, vlaltura){
    let base = vlbase;
    let altura = vlaltura;
    let status = true;

    if (isNaN(base) || isNaN(altura)){
        status = false;
    } else {
        console.log("A área do quadrado é " + base * altura + "m².");
    }
    return status;
};

const getCalculoCirculo = function(num1){
    let raio = num1;
    let area;
    let status = true;

    if(isNaN(raio)){
        status = false;
    } else {
        area = Math.PI * raio * raio;
        console.log("A área do círculo é " + area);
    }
    return status;
};

module.exports = {
    getCalculoQuadrado,
    getCalculoCirculo
};
