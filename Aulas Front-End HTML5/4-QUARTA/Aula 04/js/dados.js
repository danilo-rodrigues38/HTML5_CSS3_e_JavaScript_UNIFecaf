/******************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript.
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 08/03/2023
 * Versão: 0.0.1 
 ******************************************************/

// Recebe a div para colocar a tabela
var div = document.getElementById("listaDeNomes");

// Cria os elemontos table, tr e td para criar a tabela.
var tabela = document.createElement("table");

// Criamos um objeto que recebe todas as características do botão.
var botaoTabela = document.getElementById("tabela");
var botaoCriarItens = document.getElementById("criar");

/* const criarElementos = function() {

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
}; */

// Cria a tabela principal com a linha dos títulos (nome e telefone).
const criarTabela = function(){
    let linhaTitulo = document.createElement("tr");
    let colunaNome = document.createElement("td");
    let colunaTelefone = document.createElement("td");

    // Cria dois objetos de texto para ser colocado nas células.
    let tituloNome = document.createTextNode("Nome");
    let tituloTelefone = document.createTextNode("Telefone");

    // Associando os elementos filhos aos elementos pais.
    div.appendChild(tabela);                    // <table></table>
    tabela.appendChild(linhaTitulo);            // <tr></tr>
    linhaTitulo.appendChild(colunaNome);        // <td></td>
    linhaTitulo.appendChild(colunaTelefone);    // <td></td>

    // Associando os objetos de texto para seram títulos das células.
    colunaNome.appendChild(tituloNome);
    colunaTelefone.appendChild(tituloTelefone);
};

// Cria os itens dentro da tabela já existente.
const criarItensTabela = function(){

    // Recebe a entrada de dados realizada pelo usuário.
    // trinStart() - elimina os espaços em branco do início do conteúdo.
    // trinEnd() - elimina os espaçoes em branco do final do conteúdo
    let entradaNome = String(document.getElementById("nome").value).trimStart().trimEnd();
    let entradaTelefone = String(document.getElementById("telefone").value).trimStart().trimEnd();

    if(entradaNome == "" || entradaTelefone == ""){
        alert("Por favor, preencha todos os campos!")
    } else {
        // Cria uma linha "tr" e duas colunas "td".
        let linhaItem = document.createElement("tr");
        let colunaItemNome = document.createElement("td");
        let colunaItemTelefone = document.createElement("td");

        // Cria dois objetos de texto para escrever o que foi digitado pelo usuário.
        let textoNome = document.createTextNode(entradaNome);
        let textoTelefone = document.createTextNode(entradaTelefone);

        // Acrescenta a nova linha "tr" na table principal.
        tabela.appendChild(linhaItem);

        // Acrescenta as duas novas "tds" dentro da "tr" anterior.
        linhaItem.appendChild(colunaItemNome);
        linhaItem.appendChild(colunaItemTelefone);

        // Acrescenta os objetos de texto dentro das "tds" que contem os dados digitados pelo usuário.
        colunaItemNome.appendChild(textoNome);
        colunaItemTelefone.appendChild(textoTelefone);

        // Chama a função para limpar todos os elementos do formulário.
        limparElementos();
    }
}

// Limpa os elementos do formulário,
const limparElementos = function(){
    // Limpar as caixas de testo.
    document.getElementById("nome").value="";
    document.getElementById("telefone").value="";

    // Direciona o foco (cursor do maouse) para a caixa de texto do nome.
    document.getElementById("nome").focus();
};

// Cria um evento para escutar o evento de load (carregar) na ação de carregar o navegador.
window.addEventListener("load", function(){criarTabela()});

// Cria um evento de escuta para o botão utilizando a ação de click
botaoCriarItens.addEventListener("click", function(){criarItensTabela()});

//botaoCriar.addEventListener("click", function(){});
