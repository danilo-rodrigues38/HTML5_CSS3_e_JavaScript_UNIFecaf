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
    } else if (!status){
        return status;
    } else {
        resultado = base * altura
        console.log("A área do quadrado é " + resultado + "m².");
    }
    return status;
};

const getCalculoCirculo = function(vlraio){
    let raio = vlraio;
    let area;
    let status = true;

    if (raio == ''){
        status = false;
    } else if (isNaN(raio)){
        status = false;
    } else if (raio == 0){
        status = false;
    } else if (raio == null){
        status = false;
    }else {
        area = Math.PI * raio * raio;
        console.log('A área do círculo é ' + area)
        status = true;
    }
    return status;
};

module.exports = {
    getCalculoQuadrado,
    getCalculoCirculo
};
