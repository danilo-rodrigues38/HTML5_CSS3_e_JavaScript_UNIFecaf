/******************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 29/03/2023
 * Versão: 0.0.1 
 ******************************************************/

var botaoCarregarEstados = document.getElementById("carregar");
var uf =  ['SP', 'AC', 'RJ', 'BA', 'CE', 'MG', 'GO', 'SC', 'SE', 'TO', 'RR', 'RO', 'RS', 'RN', 'PI', 'PE', 'PR', 'PB', 'PA', 'MT', 'MS', 'MA', 'ES', 'DF', 'AM', 'AP', 'AL'];

// Transfere o Array UF para a variável estados e em ordem crescente utilizando o sort().
var estados = uf.sort();

const percorrerArray = function(){
    //1. criar um objeto especialista no elemento select
    //let createSelect = document.getElementById("estados");

    //2. criar um objeto do tipo option.
    //let createOption = document.createElement("option");

    //3. criar um objeto de texto.
    //let createText = document.createTextNode("Texto");

    //4. Associar o option dentro de select.
    //createSelect.appendChild(createOption);

    //5. Associar o objeto de texto dentro da option.
    //createOption.appendChild(createText);

    estados.forEach(function(item){
        //1. criar um objeto especialista no elemento select
        let createSelect = document.getElementById("estados");

        //2. criar um objeto do tipo option.
        let createOption = document.createElement("option");

        //3. criar um objeto de texto.
        let createText = document.createTextNode(item);

        //4. Associar o option dentro de select.
        createSelect.appendChild(createOption);

        //5. Associar o objeto de texto dentro da option.
        createOption.appendChild(createText);
    });
};

// Necessita clicar no botão para carregar as options.
botaoCarregarEstados.addEventListener("click", function(){percorrerArray()});
/* 
// Carrega automaticamente as options
window.addEventListener("load", function(){
    percorrerArray()
});
 */