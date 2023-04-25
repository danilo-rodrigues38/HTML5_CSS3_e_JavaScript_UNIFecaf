/**
 * Objetivo: API para retornar dados de livros
 * Data: 10/04/2023
 * Autor: Danilo Rodrigues de Oliveira
 * Versão: 0.0.1
 */

/**
 * Pacotes necessários para criar uma API no node.
 * npm install express --save
 * npm install cors --save
 * npm install body-parser --save
 * 
 * Para reinstalar todo o projeto, rodar o comando: npm i
 */

// Import das dependências do projeto
// Dependência para cria a API.
const express = require("express");
// Dependência para criar as permissões de manipulações da API.
const cors = require("cors");
// Dependência para receber dados no body da requisição.
const bodyParser = require("body-parser");

// Cria o objeto app conforme a classe do express.
const app = express();

// Request - receber dados e encaminhar para API
// Response - retornar dados gerados pela API

// Especifica as permissões para a requisição da API
app.use((request, response, next) => {
    // Atribui no cabeçalho da requisição a permição de quem poderá requisitar a APT (o "*" significa que qualquer requisição será aceita). Caso seja uma API privada, severá ser incerido o IP de quem vai requisitar.
    response.header("Access-Control-Allow-Origin", "*");

    // Atribui no cabeçado da requisição quais métodos serão aceitos na API (GET, POST, PUT, DELETE, OPTIONS) CRUD (Create, Read, UpDate and Delete).
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    // Atribui as permissões ao CORS.
    app.use(cors());

    // Próximo, permite continuar a processar as PRÓXIMAS funções.
    next();
});

// ENDPOINT:
    // GET: Retorna os livros filtrando pelo nome.
    //  "/livros/:nome" - para usar a pesquisa via parâmetros.
app.get("/livros", cors(), async function(request, response){
    // Existem duas formas de receber uma variável:
        // Forma 1: params (recebe por parâmetro dentro da URL (/));
        // Froma 2: queryString (recebe por variáveis de query (?)).
        // Recebe o nome do livro que será pesquisado. Através do params.
        //let nomeDoLivro = request.params.nome;
        let nomeDoLivro = request.query.nome;
        let livros;

        // Importe do arquivo de função que pesquisa os livros.
        let biblioteca = require("./modulo/livros");

        if (nomeDoLivro != "" && nomeDoLivro != undefined){
            // Função que recebe o nome do livro e pesquisa no JSON.
            livros = biblioteca.getlivros(nomeDoLivro);
        } else {
            livros = biblioteca.getAllLivros();
        }
        // Validação para indicar se houve retorno de dados.
        if (livros) {
            response.status(200);
            response.json(livros);
        } else {
            response.status(404);
            response.json();
        }
});

app.get("/livros/isbn/:isbn", cors(), async function(request, response){
    // Existem duas formas de receber uma variável:
        // Forma 1: params (recebe por parâmetro dentro da URL (/));
        // Froma 2: queryString (recebe por variáveis de query (?)).
        // Recebe o nome do livro que será pesquisado. Através do params.
        //let nomeDoLivro = request.params.nome;
        let nomeDoLivro = request.query.nome;
        let livros;

        // Importe do arquivo de função que pesquisa os livros.
        let biblioteca = require("./modulo/livros");

        if (nomeDoLivro != "" && nomeDoLivro != undefined){
            // Função que recebe o nome do livro e pesquisa no JSON.
            livros = biblioteca.getlivros(nomeDoLivro);
        } else {
            livros = biblioteca.getAllLivros();
        }
        // Validação para indicar se houve retorno de dados.
        if (livros) {
            response.status(200);
            response.json(livros);
        } else {
            response.status(404);
            response.json();
        }
});

app.listen(8080, function(){
    console.log("Servidor aguardando requisição na porta 8080.");
});

