/******************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 08/03/2023
 * Versão: 0.0.1 
 ******************************************************/

// Criamos um objeto que recebe todas as características do botão.
var botaoTabela = document.getElementById("tabela");
//var botaoCriar = document.getElementById("criar");

const criarElementos = function() {

    let nome = document.getElementById("nome").value;

    // Cria um objeto que recebe todas as características da div.
    let div = document.getElementById("listaDeNomes");

    // creatElement - permite criar pelo JavaScript uma tag HTML.
    let ulNomes = document.createElement("ul");
    let liNomes = document.createElement("li");
    let nomeItem = document.createTextNode(nome);
    
    // Associando a ul a div de nomes.
    div.appendChild(ulNomes);

    // appendChild - permite associar um elemento filho ao elemento pai.
    ulNomes.appendChild(liNomes);

    liNomes.appendChild(nomeItem);
};

// Cria a tabela e sua estrutura de cabeçalho.
const criarTabela = function(){
    // Recebe a div para colocar a tabela
    let div = document.getElementById("listaDeNomes");

    // Cria os elemontos table, tr e td para criar a tabela.
    let tabela = document.createElement("table");
    let linhaTitulo = document.createElement("tr");
    let colunaNome = document.createElement("td");
    let colunaTelefone = document.createElement("td");

    // Cria dois objetos de texto para ser colocado nas células.
    let tituloNome = document.createTextNode("Nome");
    let tituloTelefone = document.createTextNode("Telefone");

    // Associando os elementos filhos aos elementos pais.
    div.appendChild(tabela);
    tabela.appendChild(linhaTitulo);
    linhaTitulo.appendChild(colunaNome);
    linhaTitulo.appendChild(colunaTelefone);

    // Associando os objetos de texto para seram títulos das células.
    colunaNome.appendChild(tituloNome);
    colunaTelefone.appendChild(tituloTelefone);
};

// Cria um evento de escuta para o botão utilizando a ação de click
botaoTabela.addEventListener("click", function(){criarTabela()});

//botaoCriar.addEventListener("click", function(){});
