/******************************************************************************************
 * Objetivo: Realizar o caulculo de uma tabuada.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 07/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

// Gerar a tabuada de um número.
// const calcularTabuada = function(numeroTabuada){
//     let tabuada = numeroTabuada;
//     let status = true;

//     if (isNaN(tabuada) || tabuada == 0){
//         status = false;
//     } else {
//         for (cont = 1; cont <= 10; cont++){
//             console.log(`${tabuada} X ${cont.toString().padStart(2, ' ')} = ${(tabuada * cont).toString().padStart(2, ' ')}`);
//         }
//     }
//     return status;
// }

// // Para acessar uma função em outro arquivo é necessário fazer o exports da função.
// module.exports = {
//     calcularTabuada
// }

//Gerar a tabuada de um número
const calcularTabuada = function(numeroTabuada){
    //Entradas
    let tabuada = numeroTabuada;
    let status;
    let cont = 0;
    let resultado;

    
    //Processamento

    if(tabuada == '')
        status = false;
    else if(isNaN(tabuada))
        status = false;
    else if(tabuada == 0)
        status = false;
    else if(tabuada == null)
        status = false;
    else{
        //While
        while (cont <= 10){
            resultado = tabuada * cont;
            console.log(tabuada + 'x' + cont + '=' + resultado);
            cont +=1;
        }
        status = true;
    }

    //Saída
    return status;
};


//Para acessar uma função em outro arquivo, é necessário fazer o exports da função
module.exports = {
    calcularTabuada
}