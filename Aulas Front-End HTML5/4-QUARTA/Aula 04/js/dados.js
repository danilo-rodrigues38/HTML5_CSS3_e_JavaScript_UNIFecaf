/******************************************************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 08/03/2023
 * Versão: 0.0.1 
 *****************************************************************************************/

// Criamos um objeto que recebe todas as características do botão.
var botaoTabela = document.getElementById("tabela");
//var botaoCriar = document.getElementById("criar");

const criarElementos = function() {
    // Cria um objeto que recebe todas as características da div.
    let div = document.getElementById("listaDeNomes");

    // creatElement - permite criar pelo JavaScript uma tag HTML.
    let ulNomes = document.createElement("ul");
    let liNomes = document.createElement("li");
    let nomeItem = document.createTextNode("Marcel");
    
    // Associando a ul a div de nomes.
    div.appendChild(ulNomes);

    // appendChild - permite associar um elemento filho ao elemento pai.
    ulNomes.appendChild(liNomes);

    liNomes.appendChild(nomeItem);
};

// Cria um evento de escuta para o botão utilizando a ação de click
botaoTabela.addEventListener("click", function(){criarElementos()});

//botaoCriar.addEventListener("click", function(){});
