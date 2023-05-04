/************************************************************************************************
 * Objetivo: Arquivo responsável por carregar os dados dos livros, fazendo a integração entre o Front e Back
 * Nome: Danilo Rodrigues de Oliveira
 * Data: 02/05/2023
 * Versão: 1.0.0
 ***********************************************************************************************/

// Retorna todos os livros
const getLivros = function(){
    let url = "http://localhost:8080/livros";

    fetch (url)

    .then (function(response){
        return response.json();
    })
    .then (function(dadoslivros){
        createCard(dadoslivros);
    })
}

// Cria todos os cards no HTML.
const createCard = function(dados){
    // Recebe o elemento da DIV principal do HTML.
    let conteudo = document.getElementById("conteudoLivros");

    // ********** CRIA OS ELEMENTOS HTML **********

    // Cria a DIV para receber os cards.
    let card = document.createElement("div");
    // Atribui a propriedade CLASS e coloca o valor CARD (Exatamente igual criamos no HTML).
    card.setAttribute("class", "card");

    // Cria o elemento FIGURE.
    let figure = document.createElement("figure");

    // Cria o elemento IMG.
    let img = document.createElement("img");
    img.setAttribute("src", "imagens/imagemLivro.png");

    // Cria o elemento H2.
    let h2 = document.createElement("h2");

    // Cria o elemento SPAN.
    let spanIsbn = document.createElement("span");
    spanIsbn.setAttribute("class", "isbn");

    // Cria o elemento SPAN para o valor.
    let spanValor = document.createElement("span");
    spanValor.setAttribute("class", "valor");

    // Cria o elemento para o botão comprar.
    let divBotaoComprar = document.createElement("div");
    divBotaoComprar.setAttribute("class", "comprar");

    // Cria o texto do Título H2
    let titulo = document.createTextNode("Livro de teste");
    // Cria o texto do ISBN e VALOR (SPAN).
    let textIsbn = document.createTextNode("ISBN: " + "9876543210")
    let textValor = document.createTextNode("R$ 123,45");

    // Cria o texto do botão comprar.
    let TextBotaoComprar = document.createTextNode("Comprar");

    // ########## ASSOCIAR OS ELEMENTOS CONFORME O HTML ##########
    conteudo.appendChild(card);
    card.appendChild(figure);
    figure.appendChild(img);
    card.appendChild(h2);
    card.appendChild(spanIsbn);
    card.appendChild(spanValor);
    card.appendChild(divBotaoComprar);

    // ########## ASSOCIANDO OS TEXTOS NOS ELEMENTOS ##########
    h2.appendChild(titulo);
    spanIsbn.appendChild(textIsbn);
    spanValor.appendChild(textValor);
    divBotaoComprar.appendChild(TextBotaoComprar);
}

window.addEventListener('load', function(){ getLivros(); });