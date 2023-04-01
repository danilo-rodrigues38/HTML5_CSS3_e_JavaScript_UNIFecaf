/******************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 08/03/2023
 * Versão: 0.0.1 
 ******************************************************/

var botaoCarregarEstados = document.getElementById("carregar");
var estados =  ['SP', 'AC', 'RJ', 'BA', 'CE', 'MG', 'GO', 'SC', 'SE', 'TO', 'RR', 'RO', 'RS', 'RN', 'PI', 'PE', 'PR', 'PB', 'PA', 'MT', 'MS', 'MA', 'ES', 'DF', 'AM', 'AP', 'AL'];
var totalEstados = estados.length;

const percorrerArray = function(){
    //1. criar um objeto especialista no elemento select
    let select = document.getElementById("estados");

    //2. criar um objeto do tipo option.
    let option = document.createElement("option");

    //3. criar um objeto de texto.
    let texto = document.createTextNode("texto");

    //4. Associar o option dentro de select.
    select.appendChild(option);

    //5. Associar o objeto de texto dentro da option.
    option.appendChild(texto);
    
    // estados.forEach(function(item){

    // })
};


botaoCarregarEstados.addEventListner("click", function(){percorrerArray();});